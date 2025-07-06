export const getAllBarbers = async (c: any) => {
    // Aquí puedes implementar la lógica para obtener todos los barberos
    // Por ejemplo, podrías hacer una consulta a una base de datos o un servicio externo
    const barbers = [
        { id: 1, name: 'Barbero 122', specialty: 'Corte de cabello Ali' },
        { id: 2, name: 'Barbero 2', specialty: 'Afeitado' },
    ];
    return c.json(barbers);
}
