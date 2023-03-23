import { Avatar, Card, CardContent, Typography } from '@mui/material';
import DynamicIcon from '../../../../components/dynamicIcon/DynamicIcon';
import { IAccountCard } from './AccountCard.interfaces';
const AccountCard = ({
  name = 'Credit Card',
  icon = 'FaMoneyCheck',
  totalAmount = 0
}: IAccountCard) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        '&:hover': {
          cursor: 'pointer'
        }
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Avatar sx={{ width: '90px', height: '90px', fontSize: '40px' }}>
          <DynamicIcon iconName={icon} />
        </Avatar>
        <Typography variant="h2" mt={1}>
          {name}
        </Typography>
        <Typography variant="h3" mt={1}>
          Total Amount: {totalAmount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
