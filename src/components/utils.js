import React from 'react';

const PostPanel = ({ id, record, resource }) => (
  <>
    <ul>
    {record.ordenDelDia.map((tema, index)=>(
      <li key={`tema${index}`}><h4>{tema.tema}</h4></li>
    ))}
    </ul>

    {record.ordenDelDia.map((tema, index)=>(
        <div key={`temadesc${index}`}>
          <div dangerouslySetInnerHTML={{ __html: tema.descripcion }} />
          <div dangerouslySetInnerHTML={{ __html: tema.debate }} />
          <div dangerouslySetInnerHTML={{ __html: tema.resolucion }} />
          <hr />
        </div>
    ))}
  </>
);


export { PostPanel }
