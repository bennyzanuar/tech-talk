const listOptions = (schema: any, data: [], fieldName: string) => {
  const objSchema = {
    oneOf: data.map((prov: any) => {
      return {
        const: `${prov.id}`,
        title: prov.nama,
      };
    }),
  };

  const newSchema = {
    ...schema,
    definitions: {
      ...schema.definitions,
      [fieldName]: { ...schema.definitions[fieldName], ...objSchema },
    },
  };

  return newSchema;
};

export default listOptions;
