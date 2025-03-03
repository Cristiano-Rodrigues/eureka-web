'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import MenuIcon from '@mui/icons-material/Menu'
import HandshakeIcon from '@mui/icons-material/Handshake'
import GavelIcon from '@mui/icons-material/Gavel'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import ComputerIcon from '@mui/icons-material/Computer'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { raleway } from './fonts'
import clsx from "clsx"

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex flex-col">
      <div className="w-full bg-[#222426] flex items-center justify-between py-2 p-8 md:px-18">
        <Link
          href='/'
        >
          <Image
            src='/logo.png'
            width={119}
            height={45}
            alt="Eureka official Logo"
          />
        </Link>

        <ul className="md:flex items-center gap-4 text-white hidden">
          <li>
            <Link href='#' className="hover:underline duration-300">Recursos</Link>
          </li>
          <li>
            <Link href='#' className="hover:underline duration-300">Preços</Link>
          </li>
          <li>
            <Link href='#' className="hover:underline duration-300">Ajuda</Link>
          </li>
          <li>
            <Link href='#' className="hover:underline duration-300">Login</Link>
          </li>
          <li>
            <button className="bg-white text-black rounded-full p-2 px-4 cursor-pointer">Começar</button>
          </li>
        </ul>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon className="text-white" />
        </button>
      </div>
      <ul className={clsx("flex text-white md:hidden h-fit flex-col bg-[#222426] py-2", {
        "hidden": !isOpen
      })}>
        <li>
          <Link href='#' className="block hover:underline duration-300 px-8 py-4">Recursos</Link>
        </li>
        <li>
          <Link href='#' className="block hover:underline duration-300 px-8 py-4">Preços</Link>
        </li>
        <li>
          <Link href='#' className="block hover:underline duration-300 px-8 py-4">Ajuda</Link>
        </li>
        <li>
          <Link href='#' className="block hover:underline duration-300 px-8 py-4">Login</Link>
        </li>
        <li className="px-8 py-2">
          <button className="bg-white text-black rounded-full p-2 px-4 cursor-pointer">Começar</button>
        </li>
      </ul>
      <div className="relative p-8 md:pl-40 md:pr-18 bg-[#181A1B] flex gap-8 items-center justify-between text-white flex-wrap">
        <Image
          src={'/image1.png'}
          width={110}
          height={321}
          alt="Primeira imagem da hero"
          className="absolute top-11 left-1/2 transform -translate-x-1/2 z-1 hidden md:block"
        />
        <Image
          src={'/image2.png'}
          width={120}
          height={334}
          alt="Segunda imagem da hero"
          className="absolute bottom-0 left-0 z-1 hidden md:block"
        />

        <div className="max-w-[520px]">
          <h1 className={`${raleway.className} font-bold text-6xl mb-8 z-10`}>O melhor sofware disponível no mercado</h1>
          <p>Oferecemos uma ampla gama de recursos para gerenciar a sua instituição de ensino do melhor modo possível.</p>
          <button className="p-2 px-8 bg-white rounded-full text-black mt-6 cursor-pointer">Saiba mais</button>
        </div>
        <div className="flex flex-col bg-[#222426] w-[500px] p-6 rounded-4xl gap-8">
          <div>
            <h2 className={`text-2xl ${raleway.className} mb-3`}>Inicie o seu teste gratuito do Eureka</h2>
            <p>Preencha os dados requisitados abaixo para prosseguir</p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="full-name">Seu nome pessoal</label>
              <input type="text" id="full-name" placeholder="Ex: John Doe" className="h-14 p-2 px-4 bg-[#181A1B] rounded-lg outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Seu email</label>
              <input type="email" id="email" placeholder="Ex: email@server.com" className="h-14 p-2 px-4 bg-[#181A1B] rounded-lg outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone-number">Seu telefone</label>
              <input type="tel" id="phone-number" placeholder="Ex: +244 999 999 999" className="h-14 p-2 px-4 bg-[#181A1B] rounded-lg outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="org-name">Nome da sua organização</label>
              <input type="tel" id="org-name" placeholder="Ex.: John Doe’s organization" className="h-14 p-2 px-4 bg-[#181A1B] rounded-lg outline-none" />
            </div>
          </div>

          <button className="w-full bg-[#0250C4] p-3 rounded-lg cursor-pointer">Vamos começar</button>
        </div>
      </div>
      <div className="p-8 md:px-18 md:py-12 bg-[#222426] flex gap-x-[180px] gap-y-8 flex-wrap text-white">
        <div className="flex flex-col gap-3 w-full md:w-[255px]">
          <HandshakeIcon />
          <h3 className={`${raleway.className} text-2xl`}>Confiada por muitos</h3>
          <p>Temos milhares de instituições de ensino a usar os nossos serviços</p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-[255px]">
          <GavelIcon />
          <h3 className={`${raleway.className} text-2xl`}>Regulamentada</h3>
          <p>Em conformidade com todas as leis relacionadas a gestão de escolas</p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-[255px]">
          <SupportAgentIcon />
          <h3 className={`${raleway.className} text-2xl`}>Suporte 24/7 ao cliente</h3>
          <p>Temos uma equipe de profissionais sempre disponíveis a dar suporte ao cliente</p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-[255px]">
          <ComputerIcon />
          <h3 className={`${raleway.className} text-2xl`}>Funciona em qualquer lugar</h3>
          <p>Acessível a partir do pc, telefone ou outro smart device em qualquer lugar do mundo</p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-[255px]">
          <AccessibilityIcon />
          <h3 className={`${raleway.className} text-2xl`}>Fácil de usar</h3>
          <p>Fornecemos uma interface simples, que permite ao usuário uma adaptação rápida ao sistema</p>
        </div>
      </div>
      <div className="flex flex-col bg-[#181A1B] p-8 md:p-18 gap-12">
        <h2 className={`text-white text-4xl ${raleway.className}`}>Recursos que temos a oferecer</h2>
        <div className="flex gap-8 flex-wrap">
          <div className="flex flex-col rounded-lg bg-[#0250C4] p-6 w-full md:w-[310px] gap-4 text-white">
            <Image
              src='/SCENE 1.png'
              alt='Gestão de funcionários de alunos'
              width={200}
              height={140}
              className="mx-auto"
            />

            <h3 className={`text-lg font-bold ${raleway.className}`}>Gestão de funcionários e alunos</h3>
            <p>Permite gerenciar os funcionários e formadores da instituição bem como os formandos</p>
          </div>
          <div className="flex flex-col rounded-lg bg-[#0250C4] p-6 w-full md:w-[310px] gap-4 text-white">
            <Image
              src='/SCENE 2.png'
              alt='Gestão de funcionários de alunos'
              width={200}
              height={140}
              className="mx-auto"
            />

            <h3 className={`text-lg font-bold ${raleway.className}`}>Gestão de funcionários e alunos</h3>
            <p>Permite gerenciar os funcionários e formadores da instituição bem como os formandos</p>
          </div>
          <div className="flex flex-col rounded-lg bg-[#0250C4] p-6 w-full md:w-[310px] gap-4 text-white">
            <Image
              src='/SCENE 3.png'
              alt='Gestão de funcionários de alunos'
              width={200}
              height={140}
              className="mx-auto"
            />

            <h3 className={`text-lg font-bold ${raleway.className}`}>Gestão de funcionários e alunos</h3>
            <p>Permite gerenciar os funcionários e formadores da instituição bem como os formandos</p>
          </div>
          <div className="flex flex-col rounded-lg bg-[#222426] p-6 gap-4 w-full md:max-w-[250px] text-white">
            <h3 className={`text-lg font-bold ${raleway.className}`}>E muito mais...</h3>
            <p>Saiba mais sobre os recursos do eureka</p>
            <button className="bg-white text-black rounded-full p-2 px-4 cursor-pointer">Saber mais</button>
          </div>
        </div>
      </div>
      <div className="flex p-8 md:p-18 bg-[#222426] items-center gap-8 flex-wrap">
        <div className="flex flex-col gap-12 w-[520px]">
          <h2 className={`text-white text-5xl ${raleway.className} font-bold`}>O que as pessoas dizem sobre nosso sofware</h2>
          <div className="flex gap-8 text-white">
            <ArrowBackIcon sx={{ fontSize: 40, color: '#D9D9D9' }} />
            <ArrowForwardIcon sx={{ fontSize: 40, color: '#D9D9D9' }} />
          </div>
        </div>
        <div className="w-full md:w-[320px] bg-[#0250C4] rounded-3xl p-8 md:p-12 text-white">
          <Image
            src='/person 1.png'
            alt='Pessoa 1'
            width={100}
            height={100}
          />
          <div>
            <span className={`text-6xl font-bold ${raleway.className}`}>“</span>
            <p className="text-justify">Nunca usei um software tão bom. Atendeu muito bem às minhas necessidades.</p>
            <span className={`text-6xl font-bold ${raleway.className}`}>”</span>
          </div>
          <div>
            <p className="font-bold text-lg">Elizabeth Andrade</p>
            <p>da escola <span className="font-bold">Brilho do Saber</span></p>
          </div>
        </div>
        <div className="w-full md:w-[320px] bg-[#181A1B] rounded-3xl p-8 md:p-12 text-white">
          <Image
            src='/person 2.png'
            alt='Pessoa 1'
            width={100}
            height={100}
          />
          <div>
            <span className={`text-6xl font-bold ${raleway.className}`}>“</span>
            <p className="text-justify">Sou director de duas instituições e asseguro que este software facilitou muito a minha vida.</p>
            <span className={`text-6xl font-bold ${raleway.className}`}>”</span>
          </div>
          <div>
            <p className="font-bold text-lg">Joaquim Alfredo</p>
            <p>da escola <span className="font-bold">Einstein</span></p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-8 md:p-18" style={{
        background: 'url("/background.png")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}>
        <div className="flex flex-col justify-center items-center gap-12 rounded-4xl p-8 md:p-18 bg-[#222426] w-full md:max-w-[900px] text-white">
          <h3 className={`text-white text-5xl ${raleway.className} font-bold text-center`}>Agora que nos encontrou, pode dizer Eureka!</h3>
          <p className="text-center">Não perca mais tempo. Nós temos a solução que procura para gerir melhor a sua instituição de ensino. Clique abaixo para começar.</p>
          <button className="p-2 px-8 bg-[#0250C4] rounded-full cursor-pointer">Saiba mais</button>
        </div>
      </div>
      <div className="w-full bg-[#222426] gap-4 flex flex-wrap items-center justify-between px-8 p-2 md:px-18">
        <Link
          href='/'
        >
          <Image
            src='/logo.png'
            width={119}
            height={45}
            alt="Eureka official Logo"
          />
        </Link>

        <ul className="flex flex-wrap items-center gap-4 text-white">
          <li>
            <Link href='#' className="hover:underline duration-300">Legal</Link>
          </li>
          <li>
            <Link href='#' className="hover:underline duration-300">Política de privacidade</Link>
          </li>
          <li>
            <Link href='#' className="hover:underline duration-300">Política de contas</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
