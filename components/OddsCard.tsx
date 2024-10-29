import {Box, HStack, Icon, Pressable, ScrollView, set, Text, VStack} from '@gluestack-ui/themed'
import { Colors } from '../Theme'
import React, { memo, useEffect, useState } from 'react'
import {FadeIn} from "./FadeIn";
import {Bet} from "../ProfileScreen";
import {OddsDisplay} from "./OddsDisplay";
import {exampleGameType, mockNFLDataWeek9, outstandingDummyBets} from "../dummy-data";

type OddsCardProps = {
    game: exampleGameType
}

type OddsProp = {
    odds: Number[]
}

const getGateStatusColor = (status: boolean) => {
    return status ? statusColors.open : statusColors.closed
}

const statusColors = {
    open: {
        backgroundColor: Colors.emerald100,
        borderColor: Colors.emerald300,
        textColor: Colors.emerald950,
    },
    closed: {
        backgroundColor: Colors.red100,
        borderColor: Colors.red200,
        textColor: Colors.red950,
    },
}



export const OddsCard = (props: OddsCardProps) => {
    const [oddsFormat, setOddsFormat] = useState("pointsSpread")

    const toggleOddsFormat = (oddsFormat: string) => {
        switch(oddsFormat) {
            case "pointsSpread":
                setOddsFormat("overUnder")
                break;
            case "overUnder":
                setOddsFormat("homeMoneyLine")
                break;
            case "homeMoneyLine":
                setOddsFormat("awayMoneyLine")
                break;
            default:
            setOddsFormat("pointsSpread")
        }
    }


    const displayOddsFormat =() => {
        switch(oddsFormat){
            case "pointsSpread":
                return props.game.home+" Spread"
            case "overUnder":
                return "Over-Under"
            case "homeMoneyLine":
                return props.game.home+" Moneyline"
            case "awayMoneyLine":
                return props.game.away +" Moneyline"
            default:
                return props.game.home+" Spread"
        }
    }
    const dummyBet = outstandingDummyBets;

    return (
        <FadeIn>
            <Pressable>
                <VStack
                    space='md'
                    p={16}
                    backgroundColor='white'
                    borderColor={Colors.zinc50}
                    borderRadius={12}
                    borderWidth={1}
                    shadowColor='#000'
                    shadowOffset={{ width: 0, height: 1 }}
                    shadowOpacity={0.18}
                    shadowRadius={1}
                    elevation={1}
                    width='100%'
                >
                    <HStack
                        space='sm'
                        width='100%'
                        justifyContent='space-between'
                        alignItems='flex-start'
                    >
                        <Text
                            fontFamily='Army-Bold'
                            color='black'
                            fontSize={18}
                            maxWidth='80%'
                        >
                            {props.game.away} @ {props.game.home}
                        </Text>
                        <VStack
                            space='sm'
                            alignItems='center'
                            alignContent='center'
                        >
                            <Pressable
                                onPress={() => {
                                    toggleOddsFormat(oddsFormat)
                                }
                            }
                            >
                                <Text>
                                    {displayOddsFormat()}
                                </Text>
                                <Text>
                                    Toggle
                                </Text>
                            </Pressable>
                        </VStack>
                    </HStack>
                    {props.game.startTime && (
                        <HStack space='md' alignItems='center'>
                            {/*<Clock8 size='20' color={Colors.zinc600} />*/}
                            <Text
                                flexShrink={1}
                                fontFamily='Army-Regular'
                                fontSize={14}
                                lineHeight={18}
                                color={Colors.zinc800}
                            >
                                Game Day: {props.game.startTime.format("LLLL")}
                            </Text>
                        </HStack>
                    )}
                        <HStack justifyContent='space-between'>
                            <HStack
                                gap={14}
                                alignItems='flex-start'
                                padding={'$px'}
                            >
                                {props.game.odds.map( odd => {
                                    return(
                                <OddsDisplay odd={odd} oddsFormat={oddsFormat}/>
                                    )}
                                )}
                            </HStack>
                        </HStack>
                </VStack>
            </Pressable>
        </FadeIn>
    )
}

export default memo(OddsCard)