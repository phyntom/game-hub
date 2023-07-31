import { FaPlaystation, FaXbox, FaWindows, FaAndroid, FaLinux, FaApple } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../model'
import { ReactNode } from 'react'

interface Props {
    platforms: Platform[]
}

const IconsMap: Record<string, { icon: ReactNode }> = {
    pc: {
        icon: <FaWindows />,
    },
    xbox: {
        icon: <FaXbox />,
    },
    android: {
        icon: <FaAndroid />,
    },
    linux: {
        icon: <FaLinux />,
    },
    playstation: {
        icon: <FaPlaystation />,
    },
    nintendo: {
        icon: <SiNintendo />,
    },
    ios: {
        icon: <MdPhoneIphone />,
    },
    mac: {
        icon: <FaApple />,
    },
    web: {
        icon: <BsGlobe />,
    },
}

export const PlatformIcons = ({ platforms }: Props) => {
    return (
        <>
            {platforms?.map((platform) => {
                return <div key={platform.id}>{IconsMap[`${platform.slug}`]?.icon}</div>
            })}
        </>
    )
}
