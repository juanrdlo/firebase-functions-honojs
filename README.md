## Quick start

- ```npm run dev```
- ```firebase deploy --only functions:NAME_FUNCTIONS```


## Routes
```text
routes/
└── middlewares/
    ├── middleware.ts
└── routes.ts
```

## Controller

```text
controllers/
    ├── test-controller.ts
    ├── test-2-controller.ts
```

## Apis

```text
v1/
└── api-1.ts
└── api-2.ts
```

## Manual

To create a new route and API, you only need to create a controller, 
add the route in routes.ts, and create a file in the api folder with the route's name.

#### api/api-1.ts
```text
import { Hono } from 'hono'
import {getAllBarbers} from "../../controllers/barber-controller";
import {middlewareAuth} from "../../routes/middlewares/middlewares";
const barbers = new Hono()

// Middleware
barbers.use(middlewareAuth)

// ROUTES
barbers.get('/', getAllBarbers)

// export default barbersV1
export default barbers

```


#### controller/api-controller.ts
```text
export const getAllBarbers = async (c: any) => {
    // Aquí puedes implementar la lógica para obtener todos los barberos
    // Por ejemplo, podrías hacer una consulta a una base de datos o un servicio externo
    const barbers = [
        { id: 1, name: 'Barbero 1', specialty: 'Corte de cabello Ali' },
        { id: 2, name: 'Barbero 2', specialty: 'Afeitado' },
    ];
    return c.json(barbers);
}


```


#### routes/routes.ts
```text
// Creamos la app principal
import {Hono} from "hono";
import barbers from "../apis/v1/barber";
const appRouter = new Hono()

// Routes
appRouter.route('/v1/barber', barbers) => New Route

export default appRouter
```