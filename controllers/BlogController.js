// Importamos el modelo
import BlogModel from "../models/BlogModel.js";

//* Definir los metodos para el crud:  *//

// Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ message: message.error });
  }
};

// Mostrar un registro
export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: { id: req.params.id },
    });
    res.json(blog[0]);
  } catch (error) {
    res.json({ message: message.error });
  }
};

// Crear un registro
export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.json({ message: "¡El registro se creo correctamente!" });
  } catch (error) {
    res.json({ message: message.error });
  }
};

// Actualizar un registro
export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "¡El registro se actualizo correctamente!" });
  } catch (error) {
    res.json({ message: message.error });
  }
};

// Borrar un registro
export const deleteBlog = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "¡El registro se borro correctamente!" });
  } catch (error) {
    res.json({ message: message.error });
  }
};
