import styled from 'styled-components'
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import { useState } from 'react';

const Container = styled.div`
   display: flex;
   border: var(--container-border);
   flex-direction: column;
   width: 260px;
   margin: 0 auto;
`;

const EmployeePhoto = styled.div`
   display: flex;
   border-bottom: var(--container-border);
   justify-content: center;
`;

const photo = {
   url: `https://placehold.co/260x130/png`
}

const EmployeeInfos = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   border-bottom: var(--container-border);
   
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
   font-size: 32px
`;


const tableItems = [
   { id: 1, completed: false, name: "Tarefa 1" },
   { id: 2, completed: false, name: "Tarefa 2" },
   { id: 3, completed: false, name: "Tarefa 3" },
]


const TaskTable = styled.div`
display: flex;

table {
   width: 100%;
   border-collapse: collapse;
   }
`;
function Ex7() {
   const [tasks, setTasks] = useState(tableItems);
   function toggleTask(id) {
      setTasks(tasks.map(task =>
         task.id === id ? { ...task, completed: !task.completed } : task
      ));
   }

   return (
      <Container>
         <EmployeePhoto> <img src={photo.url} alt="photo" /> </EmployeePhoto>
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

export default Ex7;