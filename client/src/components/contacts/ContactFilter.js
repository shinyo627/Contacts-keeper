import { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filtered, filterContacts, clearFilter } = contactContext;
  //   Initializing useRef with value of empty string
  //   Mutating the .current property doesn’t cause a re-render
  //   Good for making form
  const keyword = useRef('');

  useEffect(() => {
    if (filtered === null) {
      keyword.current.value = '';
    }
  }, [filtered]);

  const onChange = (e) => {
    if (keyword.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={keyword}
        type='text'
        placeholder='Filter your contact...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
