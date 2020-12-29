import React, { useState } from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Welcome,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Schedule</h1>
          <p>
            <span>Today</span>
            <span>Day 06</span>
            <span>Monday</span>
          </p>

          <NextAppointment>
            <strong>Next attendance</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/1500873?s=460&u=5a9ec92a1b593df93e818429effaf392df609119&v=4"
                alt=""
              />

              <strong>Mhayk Whandson</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Morning</strong>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/1500873?s=460&u=5a9ec92a1b593df93e818429effaf392df609119&v=4"
                  alt=""
                />

                <strong>Mhayk Whandson</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/1500873?s=460&u=5a9ec92a1b593df93e818429effaf392df609119&v=4"
                  alt=""
                />

                <strong>Mhayk Whandson</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Afternoon</strong>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/1500873?s=460&u=5a9ec92a1b593df93e818429effaf392df609119&v=4"
                  alt=""
                />

                <strong>Mhayk Whandson</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
