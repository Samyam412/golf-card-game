"use client";

import { Users, Eye, Shuffle, Crown, Target, Trophy } from "lucide-react";
import FeatureCard from "./FeatureCard";
import RuleSection from "./RuleSection";
import RuleItem from "./RuleItem";
import PowerCard from "./PowerCard";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-[4vmin] py-[8vmin]">
        <div className="flex flex-col items-center text-center gap-[3vmin]">
          <div className="inline-flex items-center gap-[2vmin] px-[3vmin] py-[1.5vmin] bg-primary/5 rounded-full border border-border">
            <Users className="w-[3vmin] h-[3vmin]" />
            <span className="text-[2vmin] font-medium text-muted-foreground">
              Multiplayer Online Card Game
            </span>
          </div>

          <h1 className="text-[8vmin] font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            Golf
          </h1>

          <p className="text-[2.5vmin] text-muted-foreground max-w-[80ch] leading-relaxed">
            A strategic multiplayer memory card game. Get the lowest score to
            win!
          </p>

          <button className="mt-[2vmin] px-[4vmin] py-[2vmin] bg-primary text-primary-foreground rounded-lg text-[2.2vmin] font-semibold hover:bg-primary/90 transition-colors">
            Start Playing
          </button>
        </div>
      </section>

      {/* Quick Features */}
      <section className="container mx-auto px-[4vmin] py-[6vmin]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3vmin]">
          <FeatureCard
            icon={<Target className="w-[4vmin] h-[4vmin]" />}
            title="Strategic Gameplay"
            description="Use power cards and memory to outsmart your opponents"
          />
          <FeatureCard
            icon={<Users className="w-[4vmin] h-[4vmin]" />}
            title="Multiplayer Fun"
            description="Play online with friends in real-time matches"
          />
          <FeatureCard
            icon={<Trophy className="w-[4vmin] h-[4vmin]" />}
            title="5 Round Battles"
            description="Lowest total score after 5 rounds wins the game"
          />
        </div>
      </section>

      {/* Game Rules Section */}
      <section className="container mx-auto px-[4vmin] py-[8vmin]">
        <div className="max-w-[120ch] mx-auto">
          <h2 className="text-[5vmin] font-bold text-center mb-[6vmin]">
            How to Play
          </h2>

          <div className="space-y-[4vmin]">
            {/* Basic Setup */}
            <RuleSection title="Game Setup">
              <RuleItem icon="🎴">
                Each player starts with 4 cards arranged in a 2×2 grid
              </RuleItem>
              <RuleItem icon="👀">
                At the start of each round, you can look at your bottom two
                cards once
              </RuleItem>
              <RuleItem icon="🎯">
                Your goal: Get the lowest total score possible
              </RuleItem>
            </RuleSection>

            {/* Gameplay */}
            <RuleSection title="Gameplay">
              <RuleItem icon="🔄">
                On your turn, pick a card from the deck
              </RuleItem>
              <RuleItem icon="🃏">
                Choose to either discard it or swap it with one of your cards
              </RuleItem>
              <RuleItem icon="⚡">
                If you pick a power card (7, 8, J, Q), you can use its special
                ability
              </RuleItem>
              <RuleItem icon="🏁">
                Any player can call "Game" when they think they have a low
                enough score
              </RuleItem>
              <RuleItem icon="⏱️">
                After someone calls "Game", remaining players get one final turn
              </RuleItem>
            </RuleSection>

            {/* Power Cards */}
            <RuleSection title="Power Cards">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vmin]">
                <PowerCard
                  card="7"
                  icon={<Eye className="w-[3vmin] h-[3vmin]" />}
                  description="Look at one of your own cards"
                />
                <PowerCard
                  card="8"
                  icon={<Eye className="w-[3vmin] h-[3vmin]" />}
                  description="Look at one of your opponent's cards"
                />
                <PowerCard
                  card="J"
                  icon={<Shuffle className="w-[3vmin] h-[3vmin]" />}
                  description="Swap cards with someone without looking"
                />
                <PowerCard
                  card="Q"
                  icon={<Shuffle className="w-[3vmin] h-[3vmin]" />}
                  description="Look at opponent's card, then choose to swap or keep"
                />
                <PowerCard
                  card="K♠ K♣"
                  icon={<Crown className="w-[3vmin] h-[3vmin]" />}
                  description="Black Kings = 0 points (Best cards!)"
                />
                <PowerCard
                  card="K♥ K♦"
                  icon={<Crown className="w-[3vmin] h-[3vmin]" />}
                  description="Red Kings = 13 points (Worst cards!)"
                />
              </div>
            </RuleSection>

            {/* Scoring */}
            <RuleSection title="Scoring">
              <RuleItem icon="🔢">
                Number cards (A-10) are worth their face value
              </RuleItem>
              <RuleItem icon="👑">Black Kings (♠ ♣) = 0 points</RuleItem>
              <RuleItem icon="💔">Red Kings (♥ ♦) = 13 points</RuleItem>
              <RuleItem icon="🏆">
                After 5 rounds, the player with the lowest total score wins!
              </RuleItem>
            </RuleSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-[4vmin] py-[6vmin] text-center text-muted-foreground text-[2vmin]">
        <p>Ready to test your memory and strategy? Start playing now!</p>
      </footer>
    </main>
  );
}
