import React, { ComponentType, useState, useEffect } from 'react';


interface LoadContentProp{
    fail?: boolean;
}
const LoadContent = <P extends object>(
    ComponenteEnvuelto: ComponentType<P>,
    opciones?: LoadContentProp
) => {

    return (props:P)=>{
        const [isLoading,setIsLoading]= useState<boolean>(true);
        const [error,setError] = useState<string|null>(null);
        useEffect(()=>{
            loadData();
        },[])
        
        const loadData = () => {
            setIsLoading(true);
      
            // For demonstration purposes, we'll use a setTimeout to simulate the action
            setTimeout(() => {
              const shouldFail = opciones && opciones.fail;
              if (shouldFail) {
                setError('Failed to load data.');
              } else {
                setIsLoading(false);
              }
            }, 0); // Simulate a 2-second delay for the action
          };
      
          if (isLoading) {
            return <div>Loading...</div>;
          }
      
          if (error) {
            return <div>{error}</div>;
          }
      
          return <ComponenteEnvuelto {...props} />;
        };
    };
export default LoadContent;