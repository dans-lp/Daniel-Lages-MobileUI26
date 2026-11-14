import styled from 'styled-components'
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import { useState } from 'react';

const Container = styled.div`
   display: flex;
   border: var(--container-border);
   flex-direction: column;
   width: 260px;
   margin: 0 auto;
   
   @media(min-width: 533px){
      flex-direction: row;
      flex-wrap: wrap;
      width: 482px ;
      }
      `;

const EmployeePhoto = styled.div`
   display: flex;
   border-bottom: var(--container-border);
   justify-content: center;
   
   .photo-big {
      display: none;   
   }

   @media(min-width: 533px){
      border-bottom: var(--container-border);
      border-right: var(--container-border);

      .photo-small {
         display: none;
      }
      .photo-big {
         display: block;
      }
   }
`;

const photo = {
   urlSmall: `https://placehold.co/260x130/png`,
   urlBig: `https://placehold.co/170x160/png`
}

const EmployeeInfos = styled.div`
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   align-items: center;
   border-bottom: var(--container-border);
   text-wrap: nowrap;
   ul{
      list-style: none; 
      padding-left: 0;
      text-align: left;
   }
`;

const IconsRow = styled.div`
   border-bottom: var(--container-border);   
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 10px;
   font-size: 32px;

     @media(min-width: 533px){
      flex-direction: column;
      gap: 20px;
      border-left: var(--container-border);
   }
`;


const tableItems = [
   { id: 1, completed: false, name: "Tarefa 1" },
   { id: 2, completed: false, name: "Tarefa 2" },
   { id: 3, completed: false, name: "Tarefa 3" },
]


const TaskTable = styled.div`
display: flex;
width: 100%;

table {
   width: 100%;
   border-collapse: collapse;
   }
   
`;

function Ex8() {
   const [tasks, setTasks] = useState(tableItems);
   function toggleTask(id) {
      setTasks(tasks.map(task =>
         task.id === id ? { ...task, completed: !task.completed } : task
      ));
   }

   return (
      <Container>
         <EmployeePhoto>
            <img className="photo-small" src={photo.urlSmall} alt="photo" />
            <img className="photo-big" src={photo.urlBig} alt="photo" />
         </EmployeePhoto>
         <EmployeeInfos>
            <ul >
               <li style={{ fontWeight: "600" }}>Nome Completo</li>
               <li>Data de Nascimento</li>
               <li>Setor</li>
               <li>Cargo</li>
            </ul>
         </EmployeeInfos>
         <IconsRow>
            <LuPhone />
            <LuMail />
            <LuMapPin />
         </IconsRow>
         <TaskTable>
            <table>
               <thead>
                  <tr>
                     <th>Estado</th>
                     <th>Tarefas</th>
                  </tr>
               </thead>
               <tbody>
                  {tasks.map((row) => (
                     <tr key={row.id}>
                        <td>
                           <input
                              type="checkbox"
                              checked={row.completed}
                              onChange={() => toggleTask(row.id)}
                           />
                        </td>
                        <td style={{ textDecoration: row.completed ? "line-through" : "none" }}>
                           {row.name}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </TaskTable>
      </Container >
   );
}

export default Ex8;