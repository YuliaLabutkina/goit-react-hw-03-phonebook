import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import List from './ContactListStyle';

const ContactList = ({ filterContacts, deleteContact }) => {
  return (
    filterContacts.length > 0 && (
      <List>
        {filterContacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            deleteContact={() => deleteContact(id)}
          />
        ))}
      </List>
    )
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
