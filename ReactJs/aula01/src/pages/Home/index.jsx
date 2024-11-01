import { ButtonComponents } from "../../components/ButtonComponents";
import { ContainerText } from "../../components/ContainerText";
import {About} from '../About'
import './style.css'
import { AulaImutabilidadeArray } from "../Aula-imutabilidadeArray";

export const Home = () => {
  return (
    
    <div className="home-container">
      <h1>Facebook</h1>
      <div className="card-container">
        <AulaImutabilidadeArray/>
      
      </div>
    </div>
  );
};
    
  
