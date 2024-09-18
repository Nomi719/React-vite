import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Badge, Image } from "antd"
import { Button } from "antd/es/radio"
import { Link, useNavigate } from "react-router-dom"



function Header(){
    const navigate = useNavigate()

    const isLogin = false
    return(
        <header className="text-gray-600 shadow body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link to={"/"}>
          <Image
            height={50}
            width={50}
            className="rounded-full"
            preview={false}
            src="https://t3.ftcdn.net/jpg/04/93/08/00/360_F_493080053_BE9Q8Al0p2KfYwj8lbh238zo7PVArmeD.jpg"
          />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        
          <Link to={"/products"} className="mr-5 hover:text-gray-900 pro">
            Products
          </Link>
          <Link to={"/orders"} className="mr-5 hover:text-gray-900 pro">
            Orders
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isLogin ? (
            <Avatar size={50} icon={<UserOutlined />} />
          ) : (
            <Button onClick={() => navigate("/auth")}>Login</Button>
          )}
          <Link to={"/carts"}>
            <Badge count={7}>
              <ShoppingCartOutlined
                style={{
                  fontSize: 30,
                  color: "blue",
                }}
              />
            </Badge>
          </Link>
        </div>
      </div>
    </header>
    )
}
export default Header;