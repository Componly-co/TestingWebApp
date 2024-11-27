import { Button, Header, TextInput } from "@componlyco/berkoukes";
import Footer from "../components/common/Footer";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const router = useNavigate();

  // Hardcoded credentials
  const hardcodedEmail = "jane.doe@mocklyhq.com";
  const hardcodedCLIKey = "M8XKZNJ";

  // State to hold user input
  const [email, setEmail] = useState("");
  const [cliKey, setCliKey] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === hardcodedEmail && cliKey === hardcodedCLIKey) {
      // Redirect to analytics page on successful authentication
      router("/analytics");
    } else {
      // Set error message on invalid credentials
      setError("Invalid email or CLI key. Please try again.");
    }
  };

  return (
    <div className='bg-[#F5F6F8]'>
      <div className="bg-[url('assets/images/bg-cover.png')] bg-no-repeat bg-cover">
        <Header
          tabs={[]}
          sx={{
            padding: "12px 24px",
            "& div": {
              width: "100%",

              "& .endButtons": {
                justifyContent: "flex-end",
              },
            },
          }}
          withDivider={false}
          endButtons={[
            {
              label: "Back to the landing",
              type: "borders",
            },
          ]}
        />
        <div className='px-52 py-28 flex flex-col gap-6'>
          <h1 className='font-bold text-5xl leading-[48px]'>Enterprise Login</h1>
          <div className='h-full rounded-[30px] p-6 border-2 card-shadow bg-white flex flex-col gap-5'>
            <div className='flex-flex-col gap-2'>
              <label className='text-2xl font-bold'>Work Email</label>
              <TextInput
                placeholder='email@work.com'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                showHelpIcon={false}
              />
            </div>
            <div className='flex-flex-col gap-2'>
              <label className='text-2xl font-bold'>CLI Key</label>
              <TextInput
                placeholder='******'
                type='password'
                value={cliKey}
                onChange={(e) => setCliKey(e.target.value)}
                showHelpIcon={false}
              />
            </div>
          </div>
          {error && <p className='text-red-500'>{error}</p>} {/* Display error message */}
          <Button
            type='primary'
            label='Login to your account'
            onClick={handleLogin}
          />
          <Stack marginY='12px' flexDirection='column' justifyContent='center' alignItems='center' gap='12px'>
            <Typography variant='body1' color='#475467'>
              We’ve demoed and shaped the product with people working at
            </Typography>
            <Stack flexDirection='row' gap={5}>
              <img src='/images/dropbox.svg' alt='airbnb' />
              <img src='/images/spotify.svg' alt='airbnb' />
              <img src='/images/blackline.svg' alt='airbnb' />
              <img src='/images/github.svg' alt='airbnb' />
            </Stack>
            <Stack flexDirection='row' gap={1} marginTop='24px'>
              <Typography>
                By requesting a key, you accept our{" "}
                <a className='font-bold color-[#475467]' href='/privacy'>
                  Privacy
                </a>{" "}
                and{" "}
                <a className='font-bold color-[#475467]' href='/terms'>
                  Terms
                </a>
              </Typography>
            </Stack>
          </Stack>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
