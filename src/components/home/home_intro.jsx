import '../../styles/home/home_intro.css'
import undrawIllustration from '../../assets/undraw_proud_coder_re_exuy.svg';
function HomeIntro() {
    return (
        <section className='home-intro'>
            <div className='inner-div'>
                <div className='home-intro-content-left'>
                    <h1 className='heading'>
                        Empowering Developers to Share, Learn, and Innovate Together
                    </h1>
                    <p className='short-text'>
                        kjnsxbcfvbjkdfsvn dfvjndfvndfijdfg dfvjkbdfnjkdfkj dfvjkbdfvjkbdfv dfvbjkdfbjkdfvbjkdfvbjkbdfgv b b dsb dsbjdsbhjdshjbds dsbhjdsbjkhsdjkds dsbhjkdbkbjkds dbjkbdsbjkskkbj dbjkdcsbjkdscbkd cdiuhrehr efhijefrjker fvjdfbjker fvhdjbs hubrewvopq hjqbd dsfhjb dfhjbval dfhjkb dvfjshd dfvhjdfv edhjvbafs kjeyadhv duajysbgv ejyhrdvbgf ejhdsav vdfhjva vadsljhvl  veqhdjlv aljhevds av jdhlvb qh fvjdhbvl qljhbvdfhj qlvhejdbv hjbdv qvluvbedhjskbv qej  bv
                    </p>
                    <button className='start'> Lets start </button>
                </div>
                <div className='home-intro-content-right'>
                    <img src={undrawIllustration} alt='illustrator' />
                </div>
            </div>
        </section>
    )
}

export default HomeIntro