import { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from '../assets/logo.png'
import Sala from '../assets/sala.png'
import Img1 from '../assets/mueble1.png'
import Img2 from '../assets/mueble2.png'
import Img3 from '../assets/mueble3.png'
import Sala2 from '../assets/rooms.jpg'
import Slide1 from '../assets/slide1.jpg'
import Slide2 from '../assets/slide2.jpg'
import Slide3 from '../assets/slide3.jpg'

function Home() {

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = productId => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [products, setProducts] = useState([])

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const result = await axios('https://65fda651b2a18489b3853422.mockapi.io/products/product');
        setProducts(result.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };  

    fetchProducts();

  }, []);

  return (
    <>
      {/* BARRA DE NAVEGACION */}

      <nav className="w-full bg-gray-100">
        <div className="flex flex-row items-center justify-between px-6 py-3 sm:py-4 sm:px-10 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:px-40 2xl:py-6 lg:flex lg:justify-between lg:items-center lg:px-20 lg:py-5">

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center" tabIndex="0">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25ZM17 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75ZM17 8.25H7C6.59 8.25 6.25 7.91 6.25 7.5C6.25 7.09 6.59 6.75 7 6.75H17C17.41 6.75 17.75 7.09 17.75 7.5C17.75 7.91 17.41 8.25 17 8.25Z" fill="#DC7633"></path> </g></svg>
            </button>

            {isMobileMenuOpen && (
                        <div className="absolute z-50 flex flex-col justify-start w-2/6 mt-1 font-bold text-white bg-orange-300 rounded-md shadow-lg sm:w-1/5">
                            <a tabIndex="-1" href="#" className="px-4 py-2 text-sm rounded-md dropdown-item hover:text-orange-600 hover:bg-orange-400">Inicio</a>
                            <a tabIndex="-1" href="#" className="px-4 py-2 text-sm rounded-md dropdown-item hover:text-orange-600 hover:bg-orange-400">Productos</a>
                            <a tabIndex="-1" href="#" className="px-4 py-2 text-sm rounded-md dropdown-item hover:text-orange-600 hover:bg-orange-400">Nosotros</a>
                            <a tabIndex="-1" href="#" className="px-4 py-2 text-sm rounded-md dropdown-item hover:text-orange-600 hover:bg-orange-400">Contacto</a>
                        </div>
                    )}
          </div>

          <div className="flex items-center gap-2 2xl:flex 2xl:flex-row 2xl:items-center 2xl:gap-4 lg:flex lg:items-center lg:gap-3">
            <img src={Logo} alt={Logo} />
            <p className="font-semibold 2xl:font-bold 2xl:text-4xl lg:font-bold lg:text-2xl">Furniro</p>
          </div>

          <div className="hidden 2xl:flex 2xl:flex-row 2xl:gap-20 2xl:font-bold lg:flex lg:gap-8 lg:font-semibold">
            <a href="" className="hover:text-orange-500 subline">Incio</a>
            <a href="" className="hover:text-orange-500 subline">Productos</a>
            <a href="" className="hover:text-orange-500 subline">Nosotros</a>
            <a href="" className="hover:text-orange-500 subline">Contacto</a>
          </div>

          <div className="flex gap-4 sm:flex sm:gap-6 2xl:flex 2xl:flex-row 2xl:gap-10 lg:flex lg:gap-10">
            <a href="" className="duration-200 hover:text-orange-500 hover:scale-110"><i className="fa-regular fa-user"></i></a>
            <a href="" className="duration-200 hover:text-orange-500 hover:scale-110"><i className="fa-solid fa-magnifying-glass"></i></a>
            <a href="" className="duration-200 hover:text-orange-500 hover:scale-110"><i className="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
      </nav>

      {/* SLIDER */}
      
      <div className="h-[45vh] bg-cover sm:h-[50vh] sm:bg-cover lg:h-[85vh] lg:bg-cover" style={{ backgroundImage: `url(${Sala})`, backgroundPosition: 'center' }}>
        <div className="flex justify-end w-full pt-32 pr-4 sm:pr-10 sm:pt-52 sm:justify-end 2xl:pr-20 2xl:pt-40 2xl:flex-row 2xl:justify-end xl:pt-40 lg:pt-32 lg:justify-end lg:pr-14"> 
          <div className="bg-orange-100 w-[57%] px-3 py-3 sm:w-[45%] sm:px-4 sm:py-4 2xl:w-[35%] 2xl:px-8 2xl:py-12 lg:w-[35%] xl:w-[30%] lg:py-8 lg:px-8">
            <p className="mb-1 text-xs font-semibold text-black sm:text-sm 2xl:text-lg 2xl:font-semibold 2xl:mb-2 lg:text-sm lg:font-semibold lg:mb-2">Nuevos Productos</p>
            <p className="text-sm font-bold text-orange-500 sm:text-lg 2xl:text-5xl 2xl:font-bold 2xl:mb-2 lg:text-3xl lg:font-bold lg:mb-1">Descubre Nuestra</p>
            <p className="mb-1 text-sm font-bold text-orange-500 sm:text-lg 2xl:text-5xl 2xl:font-bold 2xl:mb-4 lg:text-3xl lg:font-bold lg:mb-3">Nueva Coleccion</p>
            <p className="mb-2 text-xs font-semibold text-black sm:text-base sm:mb-4 2xl:text-base 2xl:font-semibold 2xl:mb-10 lg:text-base lg:font-semibold lg:mb-6">Accede a nuestro catálogo exclusivo y selecciona el mueble de tu preferencia.</p>
            <button className="px-4 py-2 text-xs text-center comic-button sm:px-8 sm:py-3 sm:text-sm lg:py-6 lg:px-14 lg:text-lg">COMPRAR AHORA</button>
          </div>
        </div>
      </div>

      {/* BROWSE */}

      <div className="w-full h-full bg-gray-100">
        <div className="flex flex-col justify-center w-full py-32">

          <div className="px-2 text-center sm:px-auto">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Explora El Catalogo</h2>
            <p className="mb-8 sm:text-xl sm:mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="flex flex-col items-center gap-8 mx-4 text-center sm:mx-10 sm:flex-row sm:gap-6 lg:gap-10 lg:mx-auto">
            <div>
              <div className="relative overflow-hidden">
                <img src={Img1} alt="Mueble1" className="h-64 duration-300 cursor-pointer w-52 sm:w-60 sm:h-72 lg:w-72 lg:h-96 rounded-xl hover:scale-125"/>
              </div>
              <p className="mt-4 text-xl font-bold sm:mt-6">Habitacion</p>
            </div>

            <div>
              <div className="relative overflow-hidden">
                <img src={Img3} alt="Mueble3" className="h-64 duration-300 cursor-pointer w-52 sm:w-60 sm:h-72 lg:w-72 lg:h-96 rounded-xl hover:scale-125"/>
              </div>
              <p className="mt-4 text-xl font-bold sm:mt-6">Cocina</p>
            </div>

            <div>
              <div className="relative overflow-hidden">
                <img src={Img2} alt="Mueble2" className="h-64 duration-300 cursor-pointer w-52 sm:w-60 sm:h-72 lg:w-72 lg:h-96 rounded-xl hover:scale-125"/>
              </div>
              <p className="mt-4 text-xl font-bold sm:mt-6">Sala</p>
            </div>

          </div>

        </div>
      </div>

      {/* PRODUCTS */}

      <div className="w-full h-full bg-gray-100">
        <div className="pb-20 2xl:pb-32 lg:pb-28 mx-auto lg:w-[80%]">
          <div className="text-center">
            <h2 className="mb-12 text-2xl font-bold sm:text-3xl">Nuestros Productos</h2>
          </div>

          <div className="grid grid-cols-2 gap-2 mx-auto sm:grid-cols-3 lg:grid-cols-4 sm:gap-3 lg:gap-5">

          {products.map((product) => (
            <div key={product.id} className="relative bg-gray-200 cursor-pointer sm:w-56 lg:w-64 2xl:w-72" 
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}>
              {product.discount && <p className="pt-3.5 pl-2.5 m-2 rounded-full bg-orange-500 text-white font-bold absolute " style={{ width: '60px', height: '60px', lineHeight: '30px' }}>-{product.discount}%</p>}
              <img src={product.image} alt={product.image} className="object-cover w-48 cursor-pointer h-52 sm:w-60 sm:h-64 lg:w-72 lg:h-80" />
              {hoveredProduct === product.id && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-3 overlay sm:px-4">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                      <button className="z-10 realtive">Añadir al carrito</button>
                    <div className="flex flex-col gap-3 2xl::flex-row lg:gap-5">
                      <a className="text-sm text-white cursor-pointer hover:text-orange-400 lg:text-base" style={{ position: 'relative', zIndex: 1 }}><i className="fa-solid fa-share-nodes"></i> Compartir</a>
                      <a className="text-sm text-white cursor-pointer hover:text-orange-400 lg:text-base" style={{ position: 'relative', zIndex: 1 }}><i className="fa-solid fa-code-compare"></i> Comparar</a>
                      <a className="text-sm text-white cursor-pointer hover:text-orange-400 lg:text-base" style={{ position: 'relative', zIndex: 1 }}><i className="fa-regular fa-heart"></i> Me gusta</a>
                    </div>
                </div>
              )}
              <div className="flex flex-col gap-2 p-4">
                <p className="text-lg font-semibold lg:text-xl lg:font-bold">{product.name}</p>
                <p className="text-sm lg:text-base">{product.description}</p>

                <div className="flex flex-col items-start justify-between sm:flex-row lg:items-center">
                {product.discount ? (
                  <>
                    <p className="font-semibold lg:font-bold">S/ {Number(product.price - (product.price * product.discount / 100)).toFixed(2)}</p>
                    <p className="text-sm text-gray-400 line-through">
                      S/ {Number(product.price).toFixed(2)}
                    </p>                   
                  </>
                    ) : (
                  <p className="font-semibold lg:font-bold">S/ {Number(product.price).toFixed(2)}</p>
                )}

                </div>
              </div>
            </div>
            ))}

          </div>

          <div className="flex justify-center w-full py-10">
            <button className="comic-button2 sm:px-12 sm:py-4 sm:text-sm lg:text-base">Mostrar Más</button>
          </div>

        </div>
      </div>

      {/* ROOMS INSPIRATION */}

      <div className="w-full h-full pb-24 2xl:pb-40 lg:pb-32">
        <div className="bg-orange-200 h-80 sm:h-[80%] sm:py-16 sm:px-28 lg:py-16 lg:px-20 px-6 mx-auto sm:grid sm:grid-cols-3 flex justify-center gap-3 sm:gap-5">

          <div className="flex flex-col justify-center w-40 gap-2 sm:gap-4 lg:gap-6 sm:w-60 lg:w-full">
            <h2 className="text-base font-bold sm:text-lg 2xl:text-5xl 2xl:font-extrabold lg:text-4xl lg:font-bold">+50 Hermosas habitaciones de inspiracion</h2>
            <p className="text-xs sm:text-sm sm:font-semibold 2xl:text-lg 2xl:font-semibold lg:text-base lg:font-semibold">Nuestro diseñador ya creó muchos prototipos hermosos de habitaciones que te inspiran</p>
            <div>
              <button className="px-4 comic-button2 sm:px-9 sm:py-3 2xl:px-12 2xl:py-4 lg:text-lg">Explorar Más</button>
            </div>
          </div>

          <div className="flex flex-col justify-end 2xl:px-20 xl:px-10 hidden-mobile">
            <img src={Sala2} alt="Sala2" className="w-80 xl:w-96 hidden-mobile" />
            <div className="absolute flex flex-row items-end m-4 hidden-mobile">
              <div className="p-6 bg-white opacity-80 hidden-mobile">
                <h2 className="font-semibold text-black text-md">Dormitorio</h2>
                <p className="text-2xl font-bold text-black">Paz Interior</p>
              </div>
              <div className=" hidden-mobile">
                <button className="px-5 py-3 text-white duration-300 bg-orange-500 border-2 hover:bg-white hover:text-orange-500 hover:border-orange-500"><i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>

        <div className="flex items-center justify-center">
          <Slider {...settings} className="w-32 sm:w-52 sm:h-6/7 2xl:w-96 lg:w-64 xl:w-80 2xl:h-5/6 lg:h-6/7">
            <div>
              <img src={Slide1} alt="image1" />
            </div>
            <div>
              <img src={Slide2} alt="image2" />
            </div>
            <div>
              <img src={Slide3} alt="image3" />
            </div>
          </Slider>
        </div>

        </div>
      </div>

      {/* FUNIRO FURNITURE */}

      <div className="w-full h-full pb-20 lg:pb-28">
        <div className="lg:w-[80%] w-[95%] mx-auto">

          <div className="mb-8 text-center">
            <h3 className="text-sm font-semibold sm:text-lg">Comparte tu estilo con</h3>
            <h2 className="text-2xl font-bold sm:text-3xl 2xl:font-extrabold 2xl:text-5xl lg:font-bold lg:text-4xl">#FurniroFurniture</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">

              <div className="grid gap-2 sm:gap-3 lg:gap-4">
                  <div className="grid content-end cursor-pointer">
                      <img className="h-auto max-w-full rounded-lg hover:scale-105 duration-200" src="https://images.unsplash.com/photo-1630585308572-f53438fc684f?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <div className="cursor-pointer">
                      <img className="h-auto max-w-full rounded-lg hover:scale-105 duration-200" src="https://images.unsplash.com/photo-1617228069096-4638a7ffc906?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
              </div>
              
              <div className="grid gap-2 sm:gap-3 lg:gap-4 cursor-pointer">
                  <div className="grid content-end ">
                      <img className="h-auto max-w-full rounded-lg hover:scale-105 duration-200 " src="https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <div className="cursor-pointer ">
                      <img className="h-auto max-w-full rounded-lg hover:scale-105 duration-200 " src="https://images.unsplash.com/photo-1559595879-24636b3222a4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
              </div>

              <div className="grid gap-2 sm:gap-3 lg:gap-4 hidden-mobile2">
                  <div className="grid content-end sm:cursor-pointer hidden-mobile2">
                      <img className="h-auto max-w-full rounded-lg hover:scale-105 duration-200 hidden-mobile2" src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <div className="sm:cursor-pointer hidden-mobile2">
                      <img className="h-auto max-w-full rounded-lg hover:scale-105 duration-200 hidden-mobile2" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
              </div>

              <div className="grid gap-2 sm:gap-3 lg:gap-4 lg:hidden-mobile">
                  <div className="grid content-end lg:cursor-pointer lg:hidden-mobile">
                      <img className="h-auto max-w-full rounded-lg hover:scale-105 duration-200 hidden-mobile" src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <div className="lg:cursor-pointer lg:hidden-mobile">
                      <img className="h-auto max-w-full rounded-lg hover:scale-105 duration-200 hidden-mobile" src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
              </div>

          </div>

        </div>
      </div>

      {/* FOOTER */}

      

<hr className="my-8" />

  <footer className="pb-2">

    <div className="w-full py-6 lg:py-8 lg:px-20 sm:px-10 px-5">
        <div className="lg:w-full w-11/12 grid sm:grid-cols-4 grid-cols-2">

          <div className="">
              <a href="#" className="flex flex-col lg:flex-row items-start mb-2 lg:mb-4 gap-2">
                  <img src={Logo} className="h-8" alt="Logo" />
                  <span className="self-start text-2xl font-semibold">Furniro</span>
              </a>
              <p className="text-xs sm:text-sm lg:text-base">San Martin de Porres</p>
              <p className="text-xs sm:text-sm lg:text-base">Lima - Perú</p>
          </div>

          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Enlaces</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Incio</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Tienda</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Nostros</a>
                </li>
              </ul>
          </div>

          <div className="mr-6 lg:mr-0">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Ayuda</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">Opciones de Pago</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Devoluciones</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Políticas de Privacidad</a>
                </li>
            </ul>
          </div>
          
          <div>
            <h2 className="mb-5 text-sm font-semibold text-gray-900 uppercase ">Boletin Informativo</h2>
            <div className="gap-4 xl:flex xl:flex-row lg:flex-col">
              <input type="text" className="px-0 text-sm border-0 border-b-2 border-orange-500 lg:text-base lg:px-0 focus:border-orange-500 focus:outline-none focus:ring-0 lg:mb-4 xl:mb-0" placeholder="Ingresa tu correo"/>
                <button className="px-4 py-2 mt-4 text-sm font-semibold sm:text-base sm:font-bold xl:border-b-2 comic-button lg:mt-0">SUBSCRIBIRSE</button>
            </div>
          </div>

        </div>
      
      </div>
  </footer>


    </>
  )
}

export default Home