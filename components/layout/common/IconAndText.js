// Icon with text on the right:
export default function IconAndText({ className, classNameIcon, children, classNameLink, link, linkText }) {
    return (
        <div className={className}>
            <div className={classNameIcon}>
                <a href={link} target="_blank" rel="noopener">
                    {children}
                </a>
            </div>
            <div className={`${classNameLink} ml-2`}>
                <a href={link} target="_blank" rel="noopener">
                    {linkText}
                </a>
            </div>
        </div>
    )
}