import { pool } from '../database'


export const readAllAlumnos = async(req, res)=>{
    try {
        const response = await pool.query('select *from alumno');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const readAlumno = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from alumno where idalumno=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const delAlumno = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from alumno where idalumno=$1', [id]);
        return res.status(200).json(
            `Alumno ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const updateAlumno= async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ nombre, apellido} = req.body;
        await pool.query('update alumno set nombre=$1, apellido=$2 where idalumno=$3', [nombre, apellido, id]);
        return res.status(200).json(
            `Alumno ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const createAlumno= async(req, res)=>{
    try {
        const{ nombre, apellido} = req.body;
        await pool.query('insert into alumno(nombre, apellido, estado) values($1,$2, 1)', [nombre, apellido]);
        return res.status(200).json(
            `Alumno ${ nombre } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}