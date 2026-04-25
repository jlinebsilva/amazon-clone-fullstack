'use client'

import { checkViewport } from '@/utils/CheckViewport'
import { ChevronDown, Menu } from 'lucide-react'
import './NavBar.sass'

export function NavBar() {
    const checkViewportResponse = checkViewport()

    return (
        <nav className="localization_bar_container">
            {
                checkViewportResponse == 'mobile' ?

                    <>
                        <div className="address_block_line">
                            <p>
                                Entregando para 00011000 {' - '}
                                Atualizar local
                            </p>
                            <button onClick={() => { }}
                                disabled
                            >
                                <ChevronDown size={20} />
                            </button>
                        </div>

                        <button className="prime_subscribe_button"
                            disabled
                            onClick={() => { }}
                        >
                            Assine o Prime
                        </button>
                    </>

                    :

                    <div className="navbar__desktop">
                        <div className="navbar__sidemenu">
                            <Menu size={25} />
                            <span>Todos</span>
                        </div>
                        <span>Venda na Amazon</span>
                        <span>Chega em 15 min</span>
                        <span>Ofertas do Dia</span>
                        <span>Prime</span>
                        <span>Atendimento ao Cliente</span>
                        <span>Eletrônicos</span>
                        <span>Livros</span>
                    </div>
            }
        </nav>
    )
}