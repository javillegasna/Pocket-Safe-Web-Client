import { Box } from '@mui/material';
import AccountCard from './components/accountCard/AccountCard';
import { IAccountCard } from './components/accountCard/AccountCard.interfaces';
import { accountsData } from './components/mock/accountData'; 
const Home = () => {
  const renderAccountCarts = (accounts: IAccountCard[]) =>
    accounts.map((account, index) => <AccountCard key={`accountCard${index}`} {...account} />);
  return (
    <Box
      component={'section'}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat( auto-fill, minmax(250px, 1fr) )',
        gap: '10px'
      }}
    >
      {renderAccountCarts(accountsData)}
    </Box>
  );
};

export default Home;
