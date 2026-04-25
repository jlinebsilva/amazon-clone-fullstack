import { ChevronRight, ShoppingCartIcon, User } from 'lucide-react'
import Image from 'next/image'
import AmazonLogo from '../../../public/amazon_logo-white.svg'
import { NavBar } from '../NavBar'
import './Header.sass'

export function Header() {
    return (
        <header>
            <div className="header">
                <div className="sitename_group">
                    <Image alt='amazon logo white'
                        loading='eager'
                        src={AmazonLogo}
                        className="logo"
                    />
                    <span className="host">.com.br</span>
                </div>

                <div className="user_access_container">
                    <div className="login_message">
                        <p className="login_message">
                            Faça seu login
                        </p>
                    </div>
                    <ChevronRight size={20} />

                    <div className="user_icons_right_container">
                        <User size={30} />
                        <ShoppingCartIcon size={30} />
                    </div>
                </div>
            </div>

            <NavBar />
        </header>
    )
}