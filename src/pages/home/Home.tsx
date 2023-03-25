import { Box } from '@mui/material';
import AccountCard from './components/accountCard/AccountCard';
import { IAccountCard } from './components/accountCard/AccountCard.interfaces';
import { useQuery } from '@apollo/client';
import { GET_ACCOUNTS } from '../../services/graphql/queries/accounts.queries';
const Home = () => {
const { loading, error, data } = useQuery<{accounts : IAccountCard[]}>(GET_ACCOUNTS);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;

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
      {data && renderAccountCarts(data.accounts)}
    </Box>
  );
};

export default Home;
