import Image from 'next/image';
import anonces from '../public/scripts/anonces.json' assert {type: 'json'};

export function AnonceList() {
   return (
      <>
         <section className='anonce-anime section'>
            <div className="anonce-anime__container">
            <h2 className='anonce-anime__title section-title'>Anime announcements this season</h2>
            <div className="anonce-anime__list">
               <div className="anonce-anime__item">
                  <div className='item__preview'>
                        <Image src={`${anonces[0].src}`} alt={`${anonces[0].title}`} width={'250px'} height={'150px'} />
                        <div className='item-overlay'></div>
                  </div>
                  <div className='item__content'>
                     <p className='item__title'>{anonces[0].title}</p>
                     <p className='item__description'>{anonces[0].description}</p>
                     <div className='item__genres'>
                           <p>{anonces[0].genres[0]}</p>
                           <p>{anonces[0].genres[1]}</p>
                           <p>{anonces[0].genres[2]}</p>
                     </div>
                  </div>
               </div>
               <div className="anonce-anime__item">
                  <div className='item__preview'>
                        <Image src={`${anonces[1].src}`} alt={`${anonces[1].title}`} width={'250px'} height={'150px'} />
                        <div className='item-overlay'></div>
                  </div>
                  <div className='item__content'>
                     <p className='item__title'>{anonces[1].title}</p>
                     <p className='item__description'>{anonces[1].description}</p>
                     <div className='item__genres'>
                           <p>{anonces[1].genres[0]}</p>
                           <p>{anonces[1].genres[1]}</p>
                           <p>{anonces[1].genres[2]}</p>
                     </div>
                  </div>
                  </div>
                  <div className="anonce-anime__item">
                  <div className='item__preview'>
                        <Image src={`${anonces[2].src}`} alt={`${anonces[2].title}`} layout={'fixed'} width={'250px'} height={'150px'} />
                        <div className='item-overlay'></div>
                  </div>
                  <div className='item__content'>
                     <p className='item__title'>{anonces[2].title}</p>
                     <p className='item__description'>{anonces[2].description}</p>
                     <div className='item__genres'>
                           <p>{anonces[2].genres[0]}</p>
                           <p>{anonces[2].genres[1]}</p>
                           <p>{anonces[2].genres[2]}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </section>
      </>
   )
}