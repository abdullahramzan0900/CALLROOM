import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
// eslint-disable-next-line import/no-unresolved
import { cilUser } from '@coreui/icons';
import { Grid, Container } from '@mui/material';
import { MdMeetingRoom } from 'react-icons/md';
import {IoMdCall} from 'react-icons/io';
import {FiUsers} from 'react-icons/fi';
import { AppCurrentVisits, AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard';

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
  
            <AppWidgetSummary color='info' title="Calls" total={8} icon={<IoMdCall size={30}/>} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Rooms" total={10} color="info" icon={<MdMeetingRoom size={30}/>} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Employees" total={200} color="info" icon={<FiUsers size={30}/>} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Projects"
              subheader="Performance"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Calls"
              subheader="Weekly Calls"
              chartData={[
                { label: 'Monday', value: 15 },
                { label: 'Tuesday', value: 12 },
                { label: 'Wednesday', value: 8 },
                { label: 'Thursday', value: 7 },
                { label: 'Friday', value: 18 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
