import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User, Education, Languages } from './../Models/user';
import { Activity } from './../Models/activity';
import { Observable, of } from 'rxjs';
import { RequestInfo } from 'angular-in-memory-web-api/interfaces';

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
        type: 'Company',
        email: 'taniag89@gmail.com',
        password: '12345678',
        repeat_password: '12345678',
        birthDate: '06/08/1989',
        phone: 660270463,
        nationality: 'ES',
        nif: '47853053N',
        aboutMe: 'M`encanten els gats',
        activities: [
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
          state: 'places available',
            peopleRegistered: 8
          }
        ],
        favorites: [],
        education: [
          {
          type: 'Títol Universitari',
          level: 'Grau',
          name: 'Infermeria',
          university: 'Universitat de Barcelona',
          finishDate: '28/06/2013'
        }
        ],
        languages: [
          {
            level: 'C1',
            language: 'Català',
            finishDate: '26/06/2007'
          },
          {
            level: 'C1',
            language: 'Castellà',
            finishDate: '26/06/2007'
          },
          {
            level: 'B2',
            language: 'Anglès',
            finishDate: '26/06/2007'
          }
        ]
    },
    {
        id: 2,
        name: 'Carla',
        surname: 'Garcia Font',
        type: 'Tourist',
        email: 'carla.gf93@gmail.com',
        password: '12345678',
        repeat_password: '12345678',
        birthDate: '06/05/1993',
        phone: 646792730,
        nationality: 'ES',
        nif: '78545825N',
        aboutMe: 'Tinc molts animals',
        activities: [
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
        state: 'places available'
        }
        ],
        favorites: [],
        education: [
          {
          type: 'Títol Universitari',
          level: 'Grau',
          name: 'Farmàcia',
          university: 'Universitat de Barcelona',
          finishDate: '28/06/2017'
        }
        ],
        languages: [
          {
            level: 'C1',
            language: 'Català',
            finishDate: '26/06/2011'
          },
          {
            level: 'C1',
            language: 'Castellà',
            finishDate: '26/06/2011'
          },
          {
            level: 'B2',
            language: 'Anglès',
            finishDate: '26/06/2011'
          }
        ]
    },
    {
        id: 3,
        name: 'Aida',
        surname: 'Castro Ruiz',
        type: 'Tourist',
        email: 'aida.castroruiz@gmail.com',
        password: '12345678',
      repeat_password: '12345678',
      birthDate: '25/01/1988',
      phone: 627955560,
      nationality: 'ES',
      nif: '45875962P',
      aboutMe: 'M`agrada anar a la muntanya',
      activities: [
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
        state: 'places available',
        peopleRegistered: 3
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
        state: 'places available',
        peopleRegistered: 8}
        ],
        favorites: [],
        education: [
          {
          type: 'Cicle Formatiu',
          level: 'Grau Mitjà',
          name: 'Gestió Administrativa',
          university: 'Institut Obert de Catalunya',
          finishDate: '28/06/2020'
        }
        ],
        languages: [
          {
            level: 'C1',
            language: 'Català',
            finishDate: '26/06/2006'
          },
          {
            level: 'C1',
            language: 'Castellà',
            finishDate: '26/06/2006'
          },
          {
            level: 'B1',
            language: 'Anglès',
            finishDate: '26/06/2006'
          }
        ]
    },
    {
        id: 4,
        name: 'Pilar',
        surname: 'Font Riera',
        type: 'Tourist',
        email: 'pilarfont62@gmail.com',
        password: '12345678',
      repeat_password: '12345678',
      birthDate: '24/04/1965',
      phone: 699856245,
      nationality: 'ES',
      nif: '77841524L',
      aboutMe: 'Em fa por anar en avió',
      activities: [
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
      state: 'places available',
      peopleRegistered: 2
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
      state: 'places available',
      peopleRegistered: 8
        }
        ],
        favorites: [],
        education: [],
        languages: [
          {
            level: 'B2',
            language: 'Català',
            finishDate: '26/06/1993'
          },
          {
            level: 'B2',
            language: 'Castellà',
            finishDate: '26/06/1993'
          }
        ]
    },
    {
        id: 5,
        name: 'Ramon',
        surname: 'Garcia Martínez',
        type: 'Tourist',
        email: 'ramgar63@gmail.com',
        password: '12345678',
      repeat_password: '12345678',
      birthDate: '11/04/1958',
      phone: 646774747,
      nationality: 'ES',
      nif: '41254789F',
      aboutMe: 'M`agraden molt els cotxes',
      activities: [
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
        state: 'places available'
        }
        ],
        favorites: [],
        education: [],
        languages: [
          {
            level: 'B1',
            language: 'Català',
            finishDate: '26/06/1995'
          },
          {
            level: 'B2',
            language: 'Castellà',
            finishDate: '26/06/1995'
          }
        ]
    },
    {
        id: 6,
        name: 'Kali',
        surname: 'Garcia Castro',
        type: 'Tourist',
        email: 'kali@gmail.com',
        password: '12345678',
      repeat_password: '12345678',
      birthDate: '10/05/1996',
      phone: 678524125,
      nationality: 'ES',
      nif: '87574525N',
      aboutMe: 'Sóc del Barça',
      activities: [
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
          state: 'places available',
          peopleRegistered: 3
        }
        ],
        favorites: [],
        education: [
          {
          type: 'Títol Universitari',
          level: 'Grau',
          name: 'Biologia',
          university: 'Universitat de Barcelona',
          finishDate: '28/06/2020'
        }
        ],
        languages: [
          {
            level: 'C1',
            language: 'Català',
            finishDate: '26/06/2018'
          },
          {
            level: 'C1',
            language: 'Castellà',
            finishDate: '26/06/2018'
          },
          {
            level: 'B2',
            language: 'Anglès',
            finishDate: '26/06/2018'
          }
        ]
    },
    {
        id: 7,
        name: 'Goku',
        surname: 'Garcia Castro',
        type: 'Tourist',
        email: 'goku@gmail.com',
        password: '12345678',
      repeat_password: '12345678',
      birthDate: '07/04/1994',
      phone: 647852730,
      nationality: 'ES',
      nif: '78553053K',
      aboutMe: 'M`agrada anar al cinema',
      activities: [
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
        state: 'places available',
        peopleRegistered: 3
        }
        ],
        favorites: [],
        education: [
          {
          type: 'Cicle Formatiu',
          level: 'Grau Superior',
          name: 'Anatomia Patològica i Citologia',
          university: 'Escola Bonanova',
          finishDate: '28/06/2017'
        }
        ],
        languages: [
          {
            level: 'C1',
            language: 'Català',
            finishDate: '26/06/2015'
          },
          {
            level: 'C1',
            language: 'Castellà',
            finishDate: '26/06/2015'
          },
          {
            level: 'B2',
            language: 'Anglès',
            finishDate: '26/06/2015'
          }
        ]
    },
    {
        id: 8,
        name: 'Quim',
        surname: 'Roca Puig',
        type: 'Company',
        email: 'quimrp@gmail.com',
        password: '12345678',
      repeat_password: '12345678',
      birthDate: '',
      phone: null,
      nationality: '',
      nif: '',
      aboutMe: '',
      activities: [
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
        state: 'places available'
        }
        ],
        favorites: [],
        education: [],
        languages: []
    },
    {
        id: 9,
        name: 'Isona',
        surname: 'Fabregó Clos',
        type: 'Tourist',
        email: 'ifabcl@gmail.com',
        password: '12345678',
      repeat_password: '12345678',
      birthDate: '',
      phone: null,
      nationality: '',
      nif: '',
      aboutMe: '',
      activities: [
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
        state: 'places available'
        }
        ],
        favorites: [],
        education: [],
        languages: []
    },
    {
        id: 10,
        name: 'Jofre',
        surname: 'Cano Gil',
        type: 'Tourist',
        email: 'jcGil9@gmail.com',
        password: '12345678',
      repeat_password: '12345678',
      birthDate: '',
      phone: null,
      nationality: '',
      nif: '',
      aboutMe: '',
      activities: [
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
      state: 'places available',
      peopleRegistered: 1
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
      state: 'places available',
      peopleRegistered: 8
        }
        ],
        favorites: [],
        education: [],
        languages: []
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
        state: 'places available',
        peopleRegistered: 3
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
      state: 'places available',
      peopleRegistered: 2
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
      state: 'places available',
      peopleRegistered: 1
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
      state: 'places available',
      peopleRegistered: 8
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

  patch(request: RequestInfo): Observable<Response> {
    console.log('This is inside your custom patch method!');
    return null;
  }
}
