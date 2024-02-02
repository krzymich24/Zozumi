# Boulder-Line Server

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

An application that lets you find bouldering and rope-climbing routes in different locations in your vicinity and rate
them. 🔎🧗**The application was prepared as a demo for the _Application Security_ course at the Poznań University of
Technology, Cybersecurity M.Sc. Programme.**
Written in Nest.js.

## Modules & Actions

### Person/User Module

|                                 ressource \ action |     create     | read  | update |      delete       | list  |
|---------------------------------------------------:|:--------------:|:-----:|:------:|:-----------------:|:-----:|
|                                           **user** |     ⏳ user     |   ❌   |   ❌    |         ❌         |   ❌   |
| **route-setter** <br/> _gym↔user<br/>relationship_ |    ⏳ admin     |  n/a  |  n/a   |      ⏳ admin      |  n/a  |
|                                            **gym** |    ⏳ admin     | ⏳ all |   ❌    | ⏳ admin (cascade) | ⏳ all |
|                                          **route** | ⏳ route-setter | ⏳ all |   ❌    | ⏳ admin (cascade) | ⏳ all |
|                    **comment** <br/> _for a route_ |     ⏳ all      | ⏳ all |   ❌    |         ❌         | ⏳ all |   
|       **rating** <br/> _given on <br/> completion_ |     ⏳ user     | ⏳ all |   ❌    |         ❌         | ⏳ all | 

### Gym Module

|               action \ actor | unregistered <br> user | registered <br> user | route-setter | admin | 
|-----------------------------:|:----------------------:|:--------------------:|:------------:|:-----:|
|                 create a gym |           ❌            |          ❌           |      ❌       |   ⏳   |
|                 read one gym |           ⏳            |          ⏳           |    ← user    |   ⏳   |
|               delete one gym |           ❌            |          ❌           |      ❌       |   ⏳   |
|                list all gyms |           ⏳            |          ⏳           |    ← user    |   ⏳   |
|   assign a <br> route-setter |           ❌            |          ❌           |      ❌       |   ⏳   |
| unassign a <br> route-setter |           ❌            |          ❌           |      ❌       |   ⏳   |