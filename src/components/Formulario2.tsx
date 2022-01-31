import { useForm2 } from "../hooks/useForm2";

interface formData {
  nombre: string;
  email: string;
  edad: number;
}
export const Formulario2 = () => {
  const { formulario, handleChange } = useForm2<formData>({
    nombre: "anacletou",
    email: "anacletou@algo.com",
    edad: 0,
  });
  const { nombre, email, edad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          onChange={(event) => handleChange(event)}
          type="email"
          className="form-control"
          value={email}
          name="email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad</label>
        <input
          onChange={(event) => handleChange(event)}
          type="number"
          className="form-control"
          name="edad"
          value={edad}
        />
      </div>
      <div>{JSON.stringify(formulario)}</div>
    </form>
  );
};
