import "./Icon.css"

type IconVariants = "upload" | "success";

type IconProps = {
    variant: IconVariants;
}

const icons: Record<IconVariants, string> = {
    upload: "images/cloud-upload-icon.svg",
    success: "s"
}

export function Icon({ variant }: IconProps) {
    const icon = icons[variant]

    return (
        <div className="circle">
            <img className="icon" src={icon} alt={`${variant} icon`} />
        </div>
    )
}