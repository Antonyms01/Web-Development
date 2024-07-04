 export default function App() {
      return (
        <Toolbar
          onPlayMovie={() => alert('Playing!')}
          onUploadImage={() => alert('Uploading!')}
        />
      );
    }
    

    export  function Toolbar({ onPlayMovie, onUploadImage }) {
          return (
            <div>
              <Button onClick={onPlayMovie}>
                Play Movie
              </Button>
              <Button onClick={onUploadImage}>
                Upload Image
              </Button>
            </div>
          );
        }


        
// export function Button({ onClick, children }) {
//       return (
//         <button onClick={onClick}>
//           {children}
//         </button>
//       );
//     }


  
   
      export function Button(obj) {
        console.log(obj)
        return (
          <button onClick={obj.onClick}>
            {obj.children}
          </button>
        );
      }
    

    
        