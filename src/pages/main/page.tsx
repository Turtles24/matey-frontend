import { Input } from "./container/input";

export function MainPage() {
 

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/*<div className="absolute text-4xl z-1"></div>*/}
        <div className = "absolute z-100">
          <Input/>
        </div>
      </div>
      
    </>
  );
}
