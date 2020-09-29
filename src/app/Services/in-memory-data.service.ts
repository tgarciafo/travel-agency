import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './Models/user';
import { Activity } from './Models/activity';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const users = [
      {
        id: 1,
        name: 'Tània',
        surname: 'Garcia Font',
        type: 'company',
        email: 'taniag89@gmail.com',
        password: '12345678',
        repeat_password: '12345678'
    },
    {
        id: 2,
        name: 'Carla',
        surname: 'Garcia Font',
        type: 'tourist',
        email: 'carla.gf93@gmail.com',
        password: '12345678',
        repeat_password: '12345678'
    },
    {
        id: 3,
        name: 'Aida',
        surname: 'Castro Ruiz',
        type: 'tourist',
        email: 'aida.castroruiz@gmail.com',
        password: '12345678',
        repeat_password: '12345678'
    },
    {
        id: 4,
        name: 'Pilar',
        surname: 'Font Riera',
        type: 'tourist',
        email: 'pilarfont62@gmail.com',
        password: '12345678',
        repeat_password: '12345678'
    },
    {
        id: 5,
        name: 'Ramon',
        surname: 'Garcia Martínez',
        type: 'tourist',
        email: 'ramgar63@gmail.com',
        password: '12345678',
        repeat_password: '12345678'
    },
    {
        id: 6,
        name: 'Kali',
        surname: 'Garcia Castro',
        type: 'tourist',
        email: 'kali@gmail.com',
        password: '12345678',
        repeat_password: '12345678'
    },
    {
        id: 7,
        name: 'Goku',
        surname: 'Garcia Castro',
        type: 'tourist',
        email: 'goku@gmail.com',
        password: '12345678',
        repeat_password: '12345678'
    },
    {
        id: 8,
        name: 'Quim',
        surname: 'Roca Puig',
        type: 'company',
        email: 'quimrp@gmail.com',
        password: '12345678',
        repeat_password: '12345678'
    },
    {
        id: 9,
        name: 'Isona',
        surname: 'Fabregó Clos',
        type: 'tourist',
        email: 'ifabcl@gmail.com',
        password: '12345678',
        repeat_password: '12345678'
    },
    {
        id: 10,
        name: 'Jofre',
        surname: 'Cano Gil',
        type: 'tourist',
        email: 'jcGil9@gmail.com',
        password: '12345678',
        repeat_password: '12345678'
    }
    ];
    const activities = [
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
    return {users, activities}
  }

  userId(users: User[]): number{
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }

  activityId(activities: Activity[]): number{
    return activities.length > 0 ? Math.max(...activities.map(activity => activity.id)) + 1 : 1;
  }
}
