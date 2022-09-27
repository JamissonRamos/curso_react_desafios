import "./MyComponente.css";
// import carro1 from '../assets/carro1.jpg';
// import carro2 from '../../assets/carro2.webp'
// import carro3 from '../../assets/carro3.jpg'

const Details = ({foto, nome, marca, ano, cor}) => {

    return (

        <div className="card">

            <div className="first_content">

                <img src={foto} alt="Carro 1"  />

            </div>

            <div className="second_content">

                <h3 className="title"> {nome} </h3>

                <div className="datalhes_carro">

                    <span className=" item marca"> 
                        marca:  
                        <span className="valor_item"> {marca} </span> 
                    </span>
                    <span className="item ano"> 
                        ano:   
                        <span className="valor_item"> {ano} </span> 
                    </span>
                    <span className="item cor"> 
                        cor:  
                        <span className="valor_item"> {cor} </span> 
                    </span>


                </div>
            </div>

        </div>

    )
}

export default Details