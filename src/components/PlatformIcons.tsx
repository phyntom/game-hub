import { Platform } from '@/types'
import { ReactNode } from 'react'
import { BsGlobe } from 'react-icons/bs'
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'

type PlatformIconsProps = {
    platforms: Platform[]
}

const iconsMap = new Map<string, { icon: ReactNode }>()

// Set each key-value pair individually using the set method
iconsMap.set('pc', { icon: <FaWindows /> })
iconsMap.set('xbox', { icon: <FaXbox /> })
iconsMap.set('android', { icon: <FaAndroid /> })
iconsMap.set('linux', { icon: <FaLinux /> })
iconsMap.set('playstation', { icon: <FaPlaystation /> })
iconsMap.set('nintendo', { icon: <SiNintendo /> })
iconsMap.set('ios', { icon: <MdPhoneIphone /> })
iconsMap.set('mac', { icon: <FaApple /> })
iconsMap.set('web', { icon: <BsGlobe /> })

function PlatformIcons({ platforms }: PlatformIconsProps) {
    return (
        <div className='flex gap-2'>
            {platforms?.map((platform: Platform) => {
                if (iconsMap.get(platform.slug)) {
                    return <span key={platform.slug}>{iconsMap?.get(platform.slug)?.icon}</span>
                }
            })}
        </div>
    )
}

export default PlatformIcons
