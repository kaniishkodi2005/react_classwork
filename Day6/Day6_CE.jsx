DAY - 6 ( Context API, REF, HOC )

1.)
import React , {useState , createContext , useContext} from "react";

const StepContext = createContext();

function ParentContext()
{
	const[Name,SetName] = useState("Divagar");
	const[Admin,SetAdmin] = useState(0);

	const Changename = () =>
	{
		SetName("Dharoon");
	}

	const changeAdmin = () =>
	{
		SetAdmin(Admin+1);
	}


	return(
		<div>
			<StepContext.Provider value = {{Name , Admin}}>
			<h1>
				ParentComponent
			</h1>
			<button onClick={Changename}> Change Name
			</button>
			<br>
			</br>
			<button onClick={changeAdmin}> Make Admin </button>
			<ChildA />
			</StepContext.Provider>
		</div>
	);
}

function ChildA()
{
	return(
		<div>
			<ChildB />
		</div>
	);
}


function ChildB()
{

	const {Name,Admin} = useContext(StepContext);
	return(
		<div>
			<h1>{Name}</h1>
			<br></br>
			<h1>{Admin}</h1>
		</div>
	);
}
export default ParentContext;

2.) HOF 
import React from "react";
const HighOrder = ({productList}) => {
	return(
		<ul>
			{productList.map((product)=>(
				<li key={product.id}>
					<div>{product.name}</div>
					<img src={`${product.image}`} alt={product.name} />
					<div>{product.price}</div>
				</li>
			))}
		</ul>
	);
}

export default HighOrder;
 (APP.JS )
const ProductList = [
	{id : "1" ,
	 price : "$200",
	 name : "pencil",
	 image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fpencil%2F&psig=AOvVaw1lYDD5dSIh-56skqJG9Be_&ust=1726722290741000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICklPncy4gDFQAAAAAdAAAAABAE"
	},
	{id : "2" ,
		price : "$200",
		name : "pen",
		image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fpencil%2F&psig=AOvVaw1lYDD5dSIh-56skqJG9Be_&ust=1726722290741000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICklPncy4gDFQAAAAAdAAAAABAE"

	   },
	   {id : "3" ,
		price : "$200",
		name : "Eraser",
		image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fpencil%2F&psig=AOvVaw1lYDD5dSIh-56skqJG9Be_&ust=1726722290741000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICklPncy4gDFQAAAAAdAAAAABAE"

	   }
];

3.)   (CONTEXT API)
import React , {useState , createContext , useContext} from "react";

const StepContext = createContext();

function ParentContext()
{
	const[Name,SetName] = useState("Divagar");
	const[Admin,SetAdmin] = useState(0);

	const Changename = () =>
	{
		SetName("Dharoon");
	}

	const changeAdmin = () =>
	{
		SetAdmin(Admin+1);
	}


	return(
		<div>
			<StepContext.Provider value = {{Name , Admin}}>
			<h1>
				ParentComponent
			</h1>
			<button onClick={Changename}> Change Name
			</button>
			<br>
			</br>
			<button onClick={changeAdmin}> Make Admin </button>
			<ChildA />
			</StepContext.Provider>
		</div>
	);
}

function ChildA()
{
	return(
		<div>
			<ChildB />
		</div>
	);
}


function ChildB()
{

	const {Name,Admin} = useContext(StepContext);
	return(
		<div>
			<h1>{Name}</h1>
			<br></br>
			<h1>{Admin}</h1>
		</div>
	);
}
export default ParentContext;
