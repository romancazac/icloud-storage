export const withRemoveButton = (Component) => {
   return function WithRemoveButton(props) {
      const { id, onRemove, ...restProps } = props;

      const handleRemove = () => {
         // Apelarea funcției onRemove pentru a elimina fișierul
         onRemove(id);
      };

      // Returnăm componenta originală împreună cu butonul de eliminare adăugat
      return (
         
            <Component {...restProps}>
               <button className="card__btn" onClick={handleRemove}>Remove el</button>
            </Component>

         
      );
   };
};
