from flask import Flask, jsonify
import requests
import json
from apscheduler.schedulers.background import BackgroundScheduler
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

API_KEY = os.getenv('API_KEY')
players = [
    # Mad Lion
    {"name": "Lamine Yamal", "tag": "Annie", "realname": "Myrwn", "team": "MDK", "role": "top"},
    {"name": "komanche uchiha", "tag": "elite", "realname": "Elyoya", "team": "MDK", "role": "jungle"},
    {"name": "Mametchi", "tag": "tukan", "realname": "Fresskowy", "team": "MDK", "role": "mid"},
    {"name": "tukaan", "tag": "tukan", "realname": "Supa", "team": "MDK", "role": "adc"},
    {"name": "alvarooo", "tag": "EUW", "realname": "Alvaro", "team": "MDK", "role": "support"},
    
    # G2
    { 'name': 'TheShackledOne', 'tag': '001', 'realname': 'Broken Blade', 'team': 'G2', 'role': 'top' },
    { 'name': 'TheShackledOne', 'tag': '002', 'realname': 'Yike', 'team': 'G2', 'role': 'jungle' },
    { 'name': 'TheShackledOne', 'tag': '003', 'realname': 'Caps', 'team': 'G2', 'role': 'mid' },
    { 'name': 'TheShackledOne', 'tag': '004', 'realname': 'Hans Sama', 'team': 'G2', 'role': 'adc' },
    { 'name': 'TheShackledOne', 'tag': '005', 'realname': 'Mikyx', 'team': 'G2', 'role': 'support' },
    
    # Fnatic
    { 'name': 'papi oscar', 'tag': 'GOAT', 'realname': 'Oscarinin', 'team': 'FNC', 'role': 'top' },
    { 'name': 'Razørk Activoo', 'tag': 'razzz', 'realname': 'Razork', 'team': 'FNC', 'role': 'jungle' },
    { 'name': 'Wesley Warren Jr', 'tag': 'EUW', 'realname': 'Humanoid', 'team': 'FNC', 'role': 'mid' },
    { 'name': 'Noah7', 'tag': 'Euw2', 'realname': 'Noah', 'team': 'FNC', 'role': 'adc' },
    { 'name': 'qrds', 'tag': '211', 'realname': 'Jun', 'team': 'FNC', 'role': 'support' },
    
    # Team BDS
    { 'name': 'Nothing much', 'tag': 'EUW', 'realname': 'Adam', 'team': 'BDS', 'role': 'top' },
    { 'name': 'sorry for ping', 'tag': '1305', 'realname': 'Sheo', 'team': 'BDS', 'role': 'jungle' },
    { 'name': 'BDSnuc', 'tag': 'EUW', 'realname': 'Nuc', 'team': 'BDS', 'role': 'mid' },
    { 'name': 'happy game', 'tag': '713', 'realname': 'Ice', 'team': 'BDS', 'role': 'adc' },
    { 'name': 'school phobia', 'tag': 'EUW', 'realname': 'Labrov', 'team': 'BDS', 'role': 'support' },
    
    # SK Gaming
    { 'name': 'yuqi', 'tag': 'golem', 'realname': 'Irrelevant', 'team': 'SK', 'role': 'top' },
    { 'name': '786786786', 'tag': 'LEC1', 'realname': 'Isma', 'team': 'SK', 'role': 'jungle' },
    { 'name': 'CHAUVESQY', 'tag': 'LEC', 'realname': 'Nisqy', 'team': 'SK', 'role': 'mid' },
    { 'name': 'Rahel', 'tag': '213', 'realname': 'Rahel', 'team': 'SK', 'role': 'adc' },
    { 'name': 'Luon', 'tag': '0127', 'realname': 'Irrelevant', 'team': 'SK', 'role': 'support' },
    
    # GiantsX
    { 'name': 'TH3', 'tag': 'GX1', 'realname': 'Th3Antonio', 'team': 'GX', 'role': 'top' },
    { 'name': 'Juhana', 'tag': 'GXP', 'realname': 'Juhan', 'team': 'GX', 'role': 'jungle' },
    { 'name': 'Ana de Armas', 'tag': 'SMRAD', 'realname': 'Jackies', 'team': 'GX', 'role': 'mid' },
    { 'name': 'LeonardoDiCassio', 'tag': 'EUW', 'realname': 'Patrik', 'team': 'GX', 'role': 'adc' },
    { 'name': 'P5MoSZ1jatp3JQYy', 'tag': 'EUW', 'realname': 'Ignar', 'team': 'GX', 'role': 'support' },
    
    # Karmine Corp
    { 'name': 'EJRKLJ0', 'tag': '0000', 'realname': 'Canna', 'team': 'KC', 'role': 'top' },
    { 'name': 'C1oser', 'tag': 'EUW', 'realname': 'Closer', 'team': 'KC', 'role': 'jungle' },
    { 'name': 'J1HUIV', 'tag': '000', 'realname': 'Vladi', 'team': 'KC', 'role': 'mid' },
    { 'name': 'Upset', 'tag': 'asdff', 'realname': 'Upset', 'team': 'KC', 'role': 'adc' },
    { 'name': 'Targamas', 'tag': '5555', 'realname': 'Targamas', 'team': 'KC', 'role': 'support' },
    
    # Rogue
    { 'name': 'Finn', 'tag': '0306', 'realname': 'Finn', 'team': 'RGE', 'role': 'top' },
    { 'name': 'Barkoon', 'tag': 'woof', 'realname': 'Markoon', 'team': 'RGE', 'role': 'jungle' },
    { 'name': 'george kittle', 'tag': 'EUW', 'realname': 'Larssen', 'team': 'RGE', 'role': 'mid' },
    { 'name': 'Kite Machine', 'tag': 'EUW', 'realname': 'Comp', 'team': 'RGE', 'role': 'adc' },
    { 'name': 'Walid Georgey', 'tag': 'EUW', 'realname': 'Zoelys', 'team': 'RGE', 'role': 'support' },
    
    # Team Heretics
    { 'name': 'Wunderwear', 'tag': 'GOAT', 'realname': 'Wunder', 'team': 'TH', 'role': 'top' },
    { 'name': 'PlaceHolderJG', 'tag': 'HRT', 'realname': 'Jankos', 'team': 'TH', 'role': 'jungle' },
    { 'name': 'xwcyw', 'tag': 'soul', 'realname': 'Zwyroo', 'team': 'TH', 'role': 'mid' },
    { 'name': 'Flakkardo', 'tag': 'METIN', 'realname': 'Flakked', 'team': 'TH', 'role': 'adc' },
    { 'name': 'CEXMONSTER', 'tag': 'CEX69', 'realname': 'Trymbi', 'team': 'TH', 'role': 'support' },
    
    # Team Vitality
    { 'name': 'is it just me', 'tag': 'EUW', 'realname': 'Photon', 'team': 'VIT', 'role': 'top' },
    { 'name': 'VIT top boy', 'tag': 'lync1', 'realname': 'Lyncas', 'team': 'VIT', 'role': 'jungle' },
    { 'name': 'I will win LEC', 'tag': '4321', 'realname': 'Vetheo', 'team': 'VIT', 'role': 'mid' },
    { 'name': 'G2 Humanoid', 'tag': 'mis', 'realname': 'Carzzy', 'team': 'VIT', 'role': 'adc' },
    { 'name': 'Peshon', 'tag': 'EUW', 'realname': 'Hylissang', 'team': 'VIT', 'role': 'support' }
]

def get_puuid(summoner_name, tag):
    try:
        url = f"https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{summoner_name}/{tag}?api_key={API_KEY}"
        response = requests.get(url)
        response.raise_for_status()
        return response.json().get('puuid')
    except requests.RequestException as e:
        print(f"Error obteniendo PUUID para {summoner_name}: {e}")
        return None

def get_summoner_id(puuid):
    try:
        url = f"https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/{puuid}?api_key={API_KEY}"
        response = requests.get(url)
        response.raise_for_status()
        return response.json().get('id')
    except requests.RequestException as e:
        print(f"Error obteniendo Summoner ID para PUUID {puuid}: {e}")
        return None



def get_elo(summoner_id):
    try:
        url = f"https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/{summoner_id}?api_key={API_KEY}"
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        ranked_data = next((queue for queue in data if queue['queueType'] == 'RANKED_SOLO_5x5'), None)
        if ranked_data:
            wins = ranked_data['wins']
            losses = ranked_data['losses']
            total_games = wins + losses
            winrate = (wins / total_games) * 100 if total_games > 0 else 0
            return {
                "tier": ranked_data['tier'],
                "rank": ranked_data['rank'],
                "leaguePoints": ranked_data['leaguePoints'],
                "wins": wins,
                "losses": losses,
                "winrate": winrate,
                "totalGames": total_games
            }
        return None
    except requests.RequestException as e:
        print(f"Error obteniendo ELO para Summoner ID {summoner_id}: {e}")
        return None

# Nueva función para verificar si el jugador está en partida
def is_in_game(summoner_id):
    try:
        url = f"https://euw1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/{summoner_id}?api_key={API_KEY}"
        response = requests.get(url)
        if response.status_code == 200:
            return True  # El jugador está en una partida
        elif response.status_code == 404:
            return False  # El jugador no está en una partida
        else:
            print(f"Error verificando partida para Summoner ID {summoner_id}: {response.status_code}")
            return None
    except requests.RequestException as e:
        print(f"Error verificando partida para Summoner ID {summoner_id}: {e}")
        return None

def update_ranking():
    updated_players = []
    for player in players:
        puuid = get_puuid(player['name'], player['tag'])
        if not puuid:
            updated_players.append({**player, "elo": None, "in_game": False})
            continue

        summoner_id = get_summoner_id(puuid)
        if not summoner_id:
            updated_players.append({**player, "elo": None, "in_game": False})
            continue

        elo = get_elo(summoner_id)
        in_game = is_in_game(summoner_id)  # Verificar si el jugador está en partida
        if in_game is None:
            in_game = False  # Asumir que no está en partida si hay un error

        updated_players.append({**player, "elo": elo, "in_game": in_game})

    # Filtrar jugadores sin ELO y ordenar por LP
    ranking = [p for p in updated_players if p['elo']]
    ranking.sort(key=lambda x: x['elo']['leaguePoints'], reverse=True)

    # Guardar el ranking actualizado en un archivo JSON
    with open('ranking.json', 'w') as f:
        json.dump(ranking, f, indent=2)
    print('Ranking actualizado!')

# Programar la tarea de actualización cada 30 minutos
scheduler = BackgroundScheduler()
scheduler.add_job(update_ranking, 'interval', minutes=30)
scheduler.start()

@app.route('/ranking', methods=['GET'])
def get_ranking():
    try:
        with open('ranking.json', 'r') as f:
            data = json.load(f)
            return jsonify(data)
    except Exception as e:
        return jsonify({"error": "Error al leer el archivo"}), 500

if __name__ == '__main__':
    update_ranking()  # Actualizar el ranking inmediatamente al iniciar el servidor
    app.run()
