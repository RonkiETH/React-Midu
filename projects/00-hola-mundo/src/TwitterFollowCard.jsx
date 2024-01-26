export function TwitterFollowCard ( {children, userName = 'unknown', isFollowing} ) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} 
                alt="El avatar de Ronki" />
                <div className='tw-followCard-info'>
                <strong >{children}</strong>
                <span className='tw-followCard-infoUsername'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button '>Seguir</button>
            </aside>
        </article>
    )
}