import "./style.scss";

const ContentList = () => {
  return (
    <section className='hc__info'>
      <div className='hc__info--box'>
        <div className='hc__info--list'>
          <div className='hc__info--item'>
            <div className='hc__info-icon hc-icon--catalog hc-icon--catalog-dims' />
            <div className='hc__info--name'>Products Catalog</div>
          </div>
          <div className='hc__info--item'>
            <div className='hc__info-icon hc-icon--support hc-icon--support-dims' />
            <div className='hc__info--name'>24/7 Customer Support</div>
          </div>
          <div className='hc__info--item'>
            <div className='hc__info-icon hc-icon--ideas hc-icon--ideas-dims' />
            <div className='hc__info--name'>Product Ideas</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContentList;