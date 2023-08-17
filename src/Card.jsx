//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(nombre, codigo) {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center'
    }}>
      
      <h3 style={{
        marginRight: 25
      }}>{nombre}</h3>
      
      <h3 style={{
        marginRight: 25
      }}>{codigo}</h3>
    </div>
    
  );
}

export default Card;
