import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';

// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch( agregarProducto() );

    try {
      // insertar en la API
      await clienteAxios.post('/productos', producto);

      // Si todo sale bien, actualizar el state
      dispatch( agregarProductoExito(producto) );
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch( agregarProductoError(true) );
    }

  } 
}

/* Las funciones que returnan objetos (todas las que estan abajo a partir de aqui)
   son el action en el reducer */

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
})

// si hubo un error
const agregarProductoError = estado => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
})

