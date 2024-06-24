import { useState } from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Iconify from 'src/components/iconify';
import axios from 'axios';

// 傳遞參數(id, orderNum, ...) 
export default function PaymentTableRow({
  orderNum,
  userName,
  totalAmount,
  bonus,
  payway,
  payStatus,
  selected,
  handleClick,
  onRowClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  
  const handleCloseMenu = async () => {
    setOpen(null);
    // 處理退款API
    const refundURL = 'http://localhost:8080/payments/insertPayment';
    const data = await axios.post(`${refundURL}/${orderNum}`);
    console.log(data);
  };

  const handleDetail = (event) => {
    console.log(orderNum);
    onRowClick(orderNum); //直接拿到orderNum => onRowClick接收參數
  }
  // 控制點 onclick={} 在子層<TableRow onClick={handleDetail}> 
  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>

        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none" onClick={handleDetail}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2" noWrap>
              {orderNum}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap onClick={handleDetail}>
            {userName}
          </Typography> 
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap onClick={handleDetail}>
            {totalAmount}
          </Typography>
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap onClick={handleDetail}>
            {bonus}
          </Typography>
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap onClick={handleDetail}>
            {payway}
          </Typography>
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap onClick={handleDetail}>
            {payStatus}
          </Typography>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          退款
        </MenuItem>

      </Popover>
    </>
  );
}

PaymentTableRow.propTypes = {
  orderNum: PropTypes.any,
  userName: PropTypes.any,
  totalAmount: PropTypes.any,
  bonus: PropTypes.any,
  payway: PropTypes.any,
  payStatus: PropTypes.any,
  handleClick: PropTypes.func,
  handleDetail: PropTypes.func,
  selected: PropTypes.any,
};
