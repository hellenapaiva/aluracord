import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useState } from 'react';
import { useRouter } from 'next/router';

import appConfig from '../config.json';


function Title(props) {
    const Tag = props.tag || 'h1'
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals["900"]};
                font-size: 24px;    
                font-weight: 600;
            }        
            `}</style>
        </>
    )
}


export default function PaginaInicial() {

    const [username, setUsername] = useState('hellenapaiva');
    const router = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.neutrals[200],
                    backgroundImage: 'url("https://cutewallpaper.org/21/wallpaper-for-programmer/17-Best-Programming-Wallpapers-MagTemplates.jpg")',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 5px 10px 0 rgb(0 0 0 / 80%)',
                        backgroundColor: appConfig.theme.colors.neutrals[100],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            router.push('/chat');
                            // window.location.href = `/chat`;
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Hello, talk to me!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            type="text"
                            value={username}
                            onChange={function (ev) {
                                const valor = ev.target.value
                                //trocar o valor da variável
                                setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[100],
                                    mainColor: appConfig.theme.colors.neutrals[300],
                                    mainColorHighlight: appConfig.theme.colors.neutrals[300],
                                    backgroundColor: appConfig.theme.colors.neutrals[300],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.neutrals[999],
                                mainColorLight: appConfig.theme.colors.neutrals[900],
                                mainColorStrong: appConfig.theme.colors.neutrals[700],
                            }}
                        />

                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[300],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[300],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}