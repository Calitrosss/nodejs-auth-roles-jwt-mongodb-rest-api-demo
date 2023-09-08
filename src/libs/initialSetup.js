import Role from "../models/Role";

// Crea roles básicos al iniciar la api
export const createRoles = async () => {
  try {
    // Cuenta la cantidad de roles existente
    const count = await Role.estimatedDocumentCount();
    console.log(count);
    if (count > 0) return;

    // Para ejecutar las 3 promesas al mismo tiempo
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
