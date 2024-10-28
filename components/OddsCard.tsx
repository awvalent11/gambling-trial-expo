import { Box, HStack, Icon, Pressable, Text, VStack } from '@gluestack-ui/themed'
import { Colors } from '../Theme'
import React, { memo, useEffect, useState } from 'react'
import {FadeIn} from "./FadeIn";
import {Bet} from "../ProfileScreen";
import {OddsDisplay} from "./OddsDisplay";
import {exampleGameType, mockNFLDataWeek8, outstandingDummyBets} from "../dummy-data";

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

// const toggleOddsFormat = () => {
//     switch (oddsFormat):
//         case "pointsSpread": setOddsFormat("overUnder")
// }


export const OddsCard = (props: OddsCardProps) => {
    const [oddsFormat, setOddsFormat] = useState("pointsSpread")
    // useEffect(() => {
    //     let mounted = true
    //
    //     userBaseRepository.getUserBase().then((base) => {
    //         if (mounted) {
    //             subscribeToUpdateCount(base, resource, setUpdateCount).then(
    //                 (unsubFunction) => {
    //                     setUnsubscribe(() => unsubFunction)
    //                 }
    //             )
    //         }
    //     })
    //
    //     // unsubscribe on dismount
    //     return () => {
    //         if (unsubscribe) unsubscribe()
    //         mounted = false
    //     }
    // }, [])

    // async function toggleIsFavorite() {
    //     await setIsResourceFavorite(bet, !isFavorite)
    // }

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
                        <HStack
                            space='sm'
                            alignItems='center'
                            marginLeft='auto'
                        >
                            <Pressable
                                onPress={() =>
                                    alert('Toogle me!')
                            // this bad boy is going to pass some
                            //        state down to the OddsDisplay component
                            }
                            >
                                <Text>
                                    Toggle
                                </Text>
                            </Pressable>
                        </HStack>
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