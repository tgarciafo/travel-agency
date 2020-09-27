import { Activity } from './Models/activity';

export const ACTIVITIES: Activity[] = [
    {
        id: 1,
        name: 'Bodega Torres',
        category: 'enoturisme',
        subcategory: 'bodega',
        description: 'Visita a la bodega Torres',
        language: 'català',
        date: '11/10/2020',
        price: 25,
        minCapacity: 3,
        limitCapacity: 10,
        state: 'places available'
    },
    {
        id: 2,
        name: 'Sopa de Cabra',
        category: 'cultura i patrimoni',
        subcategory: 'concert',
        description: 'Concert de Sopa de Cabra al teatre l`Atlàntida de Vic',
        language: 'català',
        date: '25/10/2020',
        price: 20,
        minCapacity: 20,
        limitCapacity: 100,
        state: 'places available'
    },
    {
        id: 3,
        name: 'Platja del Castell',
        category: 'platges',
        subcategory: 'cala',
        description: 'Estada a la Platja del Castell',
        language: 'anglès',
        date: '31/12/2020',
        price: 15,
        minCapacity: 10,
        limitCapacity: 65,
        state: 'places available'
    },
    {
        id: 4,
        name: 'Museu Dalí',
        category: 'cultura i patrimoni',
        subcategory: 'museu',
        description: 'Visita al museu Dalí de Figueres',
        language: 'castellà',
        date: '11/11/2020',
        price: 30,
        minCapacity: 15,
        limitCapacity: 50,
        state: 'complete'
    }
];