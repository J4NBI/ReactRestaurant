import logoRestaurant from '../assets/logo.jpg'

export default function Header(){
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoRestaurant} alt="A Restaurant" />
                <h1>ReactReastaurant</h1>
            </div>
            <button>Cart (0)</button>
        </header>
    )
}