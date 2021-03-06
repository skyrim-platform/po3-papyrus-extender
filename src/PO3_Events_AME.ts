/*
==============================================
Typescript definitions for v4.5.5
==============================================

This file was automatically generated by Papyrus-2-Typescript.exe
https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript

The program has no way to know the intention of the humans that made
the scripts, so it's always advisable to manually check all generated
files to make sure everything is declared as it should.

Take note the program assumes this script exists in some subfolder
to the folder where `skyrimPlatform.ts` is found, otherwise you'll get
"Cannot find module..." type of errors.

If you want to have this script in some other place, just change the
relative path of each `import`.
*/

import * as sp from "skyrimPlatform";
import { Quest } from "skyrimPlatform";
import { Form } from "skyrimPlatform";
import { ActiveMagicEffect } from "skyrimPlatform";

const sn = (sp as any).PO3_Events_AME;

//EVENTS SHOULD BE CALLED ON AN ACTIVEFFECT - script that is attached to a magic effect.

//ACTOR KILL

export const RegisterForActorKilled = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForActorKilled(akActiveEffect);
export const UnregisterForActorKilled = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForActorKilled(akActiveEffect);

// 	Event OnActorKilled(Actor akVictim, Actor akKiller)
// 	EndEvent

//ACTOR REANIMATE
//start fires when actor is reanimated and stop when the reanimate effect is dispelled

export const RegisterForActorReanimateStart = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForActorReanimateStart(akActiveEffect);
export const UnregisterForActorReanimateStart = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForActorReanimateStart(akActiveEffect);

export const RegisterForActorReanimateStop = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForActorReanimateStop(akActiveEffect);
export const UnregisterForActorReanimateStop = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForActorReanimateStop(akActiveEffect);

// 	Event OnActorReanimateStart(Actor akTarget, Actor akCaster)
// 	EndEvent

// 	Event OnActorReanimateStop(Actor akTarget, Actor akCaster)
// 	EndEvent

//ACTOR RESURRECT
//fires when the target has been resurrected via script or console command

export const RegisterForActorResurrected = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForActorResurrected(akActiveEffect);
export const UnregisterForActorResurrected = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForActorResurrected(akActiveEffect);

// 	Event OnActorResurrected(Actor akTarget, bool abResetInventory)
// 	EndEvent

//BOOKS READ

export const RegisterForBookRead = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForBookRead(akActiveEffect);
export const UnregisterForBookRead = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForBookRead(akActiveEffect);

// 	Event OnBookRead(Book akBook)
// 	EndEvent

//CELL FULLY LOADED
//Can fire multiple times in exteriors, for each cell that is fully loaded.

export const RegisterForCellFullyLoaded = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForCellFullyLoaded(akActiveEffect);
export const UnregisterForCellFullyLoaded = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForCellFullyLoaded(akActiveEffect);

// 	Event OnCellFullyLoaded(Cell akCell)
// 	EndEvent

//CRITICAL HIT
//Player only event?

export const RegisterForCriticalHit = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForCriticalHit(akActiveEffect);
export const UnregisterForCriticalHit = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForCriticalHit(akActiveEffect);

// 	Event OnCriticalHit(Actor akAggressor, Weapon akWeapon, bool abSneakHit)
// 	EndEvent

//DISARMED

export const RegisterForDisarmed = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForDisarmed(akActiveEffect);
export const UnregisterForDisarmed = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForDisarmed(akActiveEffect);

// 	Event OnDisarmed(Actor akSource, Weapon akTarget)
// 	EndEvent

//DRAGON SOUL ABSORBED

export const RegisterForDragonSoulGained = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForDragonSoulGained(akActiveEffect);
export const UnregisterForDragonSoulGained = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForDragonSoulGained(akActiveEffect);

// 	Event OnDragonSoulGained(float afSouls)
// 	EndEvent

//ITEM HARVESTED
//Player only event

export const RegisterForItemHarvested = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForItemHarvested(akActiveEffect);
export const UnregisterForItemHarvested = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForItemHarvested(akActiveEffect);

// 	Event OnItemHarvested(Form akProduce)
// 	EndEvent

//LEVEL INCREASE

export const RegisterForLevelIncrease = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForLevelIncrease(akActiveEffect);
export const UnregisterForLevelIncrease = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForLevelIncrease(akActiveEffect);

// 	Event OnLevelIncrease(int aiLevel)
// 	EndEvent

//LOCATION DISCOVERY

export const RegisterForLocationDiscovery = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForLocationDiscovery(akActiveEffect);
export const UnregisterForLocationDiscovery = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForLocationDiscovery(akActiveEffect);

// 	Event OnLocationDiscovery(String asRegionName, String asWorldspaceName)
// 	EndEvent

//OBJECT GRAB/RELEASE
//Doesn't work with telekinesis and when the player grabs the same object in a row

export const RegisterForObjectGrab = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForObjectGrab(akActiveEffect);
export const UnregisterForObjectGrab = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForObjectGrab(akActiveEffect);

// 	Event OnObjectGrab(ObjectReference akObjectRef)
// 	EndEvent

// 	Event OnObjectRelease(ObjectReference akObjectRef)
// 	EndEvent

//OBJECT LOADED/UNLOADED
//Not all objects fire this event. It is somewhat inconsistent.

export const RegisterForObjectLoaded = (
  akActiveEffect: ActiveMagicEffect | null | undefined,
  formType: number
): void => sn.RegisterForObjectLoaded(akActiveEffect, formType);
export const UnregisterForObjectLoaded = (
  akActiveEffect: ActiveMagicEffect | null | undefined,
  formType: number
): void => sn.UnregisterForObjectLoaded(akActiveEffect, formType);
export const UnregisterForAllObjectsLoaded = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForAllObjectsLoaded(akActiveEffect);

// 	Event OnObjectLoaded(ObjectReference akRef, int aiFormType)
// 	EndEvent

// 	Event OnObjectUnloaded(ObjectReference akRef, int aiFormType)
// 	EndEvent

//QUEST START/STOP

export const RegisterForQuest = (
  akActiveEffect: ActiveMagicEffect | null | undefined,
  akQuest: Quest | null | undefined
): void => sn.RegisterForQuest(akActiveEffect, akQuest);
export const UnregisterForQuest = (
  akActiveEffect: ActiveMagicEffect | null | undefined,
  akQuest: Quest | null | undefined
): void => sn.UnregisterForQuest(akActiveEffect, akQuest);
export const UnregisterForAllQuests = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForAllQuests(akActiveEffect);

// 	Event OnQuestStart(Quest akQuest)
// 	EndEvent

// 	Event OnQuestStop(Quest akQuest)
// 	EndEvent

//QUEST STAGE CHANGE

export const RegisterForQuestStage = (
  akActiveEffect: ActiveMagicEffect | null | undefined,
  akQuest: Quest | null | undefined
): void => sn.RegisterForQuestStage(akActiveEffect, akQuest);
export const UnregisterForQuestStage = (
  akActiveEffect: ActiveMagicEffect | null | undefined,
  akQuest: Quest | null | undefined
): void => sn.UnregisterForQuestStage(akActiveEffect, akQuest);
export const UnregisterForAllQuestStages = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForAllQuestStages(akActiveEffect);

// 	Event OnQuestStageChange(Quest akQuest, Int aiNewStage)
// 	EndEvent

//SHOUT ATTACK
//Player only event

export const RegisterForShoutAttack = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForShoutAttack(akActiveEffect);
export const UnregisterForShoutAttack = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForShoutAttack(akActiveEffect);

// 	Event OnPlayerShoutAttack(Shout akShout)
// 	EndEvent

//SKILL INCREASE

export const RegisterForSkillIncrease = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForSkillIncrease(akActiveEffect);
export const UnregisterForSkillIncrease = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForSkillIncrease(akActiveEffect);

// 	Event OnSkillIncrease(String asSkill)
// 	EndEvent

//SOUL TRAP
//Event will fire after OnDying/OnDeath

export const RegisterForSoulTrapped = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForSoulTrapped(akActiveEffect);
export const UnregisterForSoulTrapped = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForSoulTrapped(akActiveEffect);

// 	Event OnSoulTrapped(Actor akVictim, Actor akKiller)
// 	EndEvent

//SPELL LEARNED

export const RegisterForSpellLearned = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForSpellLearned(akActiveEffect);
export const UnregisterForSpellLearned = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForSpellLearned(akActiveEffect);

// 	Event OnSpellLearned(Spell akSpell)
// 	EndEvent

//WEATHER CHANGE

export const RegisterForWeatherChange = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForWeatherChange(akActiveEffect);
export const UnregisterForWeatherChange = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForWeatherChange(akActiveEffect);

// 	Event OnWeatherChange(Weather akOldWeather, Weather akNewWeather)
// 	EndEvent

//MAGIC EFFECT APPLY
//Filter takes in a matching magic effect, a keyword, or a formlist containing keywords.
//bApplied will return if the magic effect was applied or not, unlike vanilla event which fires for everything.

export const RegisterForMagicEffectApplyEx = (
  akActiveEffect: ActiveMagicEffect | null | undefined,
  akEffectFilter: Form | null | undefined,
  abMatch: boolean
): void =>
  sn.RegisterForMagicEffectApplyEx(akActiveEffect, akEffectFilter, abMatch);
export const UnregisterForMagicEffectApplyEx = (
  akActiveEffect: ActiveMagicEffect | null | undefined,
  akEffectFilter: Form | null | undefined,
  abMatch: boolean
): void =>
  sn.UnregisterForMagicEffectApplyEx(akActiveEffect, akEffectFilter, abMatch);
export const UnregisterForAllMagicEffectApplyEx = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForAllMagicEffectApplyEx(akActiveEffect);

// 	Event OnMagicEffectApplyEx(ObjectReference akCaster, MagicEffect akEffect, Form akSource, bool abApplied)
// 	EndEvent

//ON WEAPON HIT
//Event OnHit except weapons only AND the aggressor recieves this event for each target hit by it
//Statics have no hit flags - 0

/** FLAGS - use SKSE's LogicalAnd to check if flag is set
			
		kBlocked = 1,
		kBlockWithWeapon = 2,
		kBlockCandidate = 4,
		kCritical = 8,
		kCriticalOnDeath = 16,
		kFatal = 32,
		kDismemberLimb = 64,
		kExplodeLimb = 128,
		kCrippleLimb = 256,
		kDisarm = 512,
		kDisableWeapon = 1024,
		kSneakAttack = 2048,
		kIgnoreCritical = 4096,
		kPredictDamage = 8192,
		kPredictBaseDamage = 16384,
		kBash = 32768,
		kTimedBash = 65536,
		kPowerAttack = 131072,
		kMeleeAttack = 262144,
		kRicochet = 524288,
		kExplosion = 1048576 */

export const RegisterForWeaponHit = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForWeaponHit(akActiveEffect);
export const UnregisterForWeaponHit = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForWeaponHit(akActiveEffect);

// 	Event OnWeaponHit(ObjectReference akTarget, Form akSource, Projectile akProjectile, Int aiHitFlagMask)
// 	EndEvent

//ON MAGIC HIT
//Event OnHit except for magic AND aggressor recieves this event for each target hit by it

export const RegisterForMagicHit = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForMagicHit(akActiveEffect);
export const UnregisterForMagicHit = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForMagicHit(akActiveEffect);

// 	Event OnMagicHit(ObjectReference akTarget, Form akSource, Projectile akProjectile)
// 	EndEvent

//ON PROJECTILE HIT
//Event OnHit except for projectiles AND the aggressor recieves this event for each target hit by it

export const RegisterForProjectileHit = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.RegisterForProjectileHit(akActiveEffect);
export const UnregisterForProjectileHit = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForProjectileHit(akActiveEffect);

// 	Event OnProjectileHit(ObjectReference akTarget, Form akSource, Projectile akProjectile)
// 	EndEvent

//FEC - RESET ACTOR EFFECTS

export const RegisterForFECReset = (
  akActiveEffect: ActiveMagicEffect | null | undefined,
  aiType: number
): void => sn.RegisterForFECReset(akActiveEffect, aiType);
export const UnregisterForFECReset = (
  akActiveEffect: ActiveMagicEffect | null | undefined,
  aiType: number
): void => sn.UnregisterForFECReset(akActiveEffect, aiType);
export const UnregisterForAllFECResets = (
  akActiveEffect: ActiveMagicEffect | null | undefined
): void => sn.UnregisterForAllFECResets(akActiveEffect);

// 	Event OnFECReset(Actor akActor, int aiType, bool abReset3D)
// 	EndEvent
