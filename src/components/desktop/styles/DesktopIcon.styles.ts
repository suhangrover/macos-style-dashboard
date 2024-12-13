export const iconStyles = {
  container: `
    absolute flex flex-col items-center w-[90px] 
    cursor-default transition-transform duration-150
  `,
  iconWrapper: `
    relative w-[52px] h-[52px] 
    rounded-xl shadow-lg 
    transition-all duration-200
    hover:scale-[1.02] active:scale-95
    backdrop-blur-sm
  `,
  label: `
    mt-1 px-2 py-0.5 text-[12px] text-white/90 
    text-center rounded-[4px] select-none
    bg-transparent
    hover:bg-white/10 hover:backdrop-blur-sm
    font-medium tracking-tight
    transition-all duration-150
  `,
  selected: {
    label: `bg-blue-500/30 backdrop-blur-sm text-white`
  }
} as const;